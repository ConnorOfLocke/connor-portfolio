import { useState, useCallback, useContext, useEffect } from "react";
import styled, { ThemeContext } from "styled-components";

function parseVideoLink(videoLink) {
  if (videoLink.search("youtube") >= 0) {
    //find if it already has the embed link
    const isEmbeded = videoLink.search("https://www.youtube.com/embed/") >= 0;
    if (!isEmbeded) {
      //get the code at the end
      const linkCode = videoLink.split("/watch?v=")[1];
      return `https://www.youtube.com/embed/${linkCode}`;
    }
  }

  return videoLink;
}

export default function ProjectVideo({ project }) {
  const themeContext = useContext(ThemeContext);
  const [videoWidth, setVideoWidth] = useState(themeContext.largeProjectMediaSizePixels);

  //Resize the video
  const handleResize = useCallback(() => {
    setVideoWidth((prevWidth) => {
      const newVidWith = window.matchMedia(`(min-width: ${themeContext.mediumScreen})`).matches
        ? themeContext.largeProjectMediaSizePixels
        : themeContext.smallProjectMediaSizePixels;
      return newVidWith !== prevWidth ? newVidWith : prevWidth;
    });
  }, [themeContext]);

  //call it on load
  useEffect(() => {
    handleResize();
  }, [handleResize]);

  useEffect(() => {
    const listener = window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", listener);
    };
  }, [handleResize]);

  return (
    <>
      {project.otherVideoLink && <OtherVideo src={project.otherVideoLink} controls />}
      {project.youtubeLink && (
        <YoutubeVideo
          src={parseVideoLink(project.youtubeLink)}
          allow="encrypted-media"
          referrerPolicy="strict-origin-when-cross-origin"
          width={`${videoWidth}px`}
          height={`${videoWidth * themeContext.mediaRatio}px`}
          seamless
        />
      )}
    </>
  );
}

const YoutubeVideo = styled.iframe`
  border: 0;
  //box-shadow: 0px 0px 0px, 3px 3px 3px ${(props) => props.theme.light.headerTextColor};
`;

const OtherVideo = styled.video`
  border: 0;
  //box-shadow: 0px 0px 0px, 3px 3px 3px ${(props) => props.theme.light.headerTextColor};

  width: ${(props) => props.theme.largeProjectMediaSizePixels}px;
  height: ${(props) => props.theme.largeProjectMediaSizePixels * props.theme.mediaRatio}px;
  @media (max-width: ${(props) => props.theme.mediumScreen}) {
    width: ${(props) => props.theme.smallProjectMediaSizePixels}px;
    height: ${(props) => props.theme.smallProjectMediaSizePixels * props.theme.mediaRatio}px;
  }
`;
