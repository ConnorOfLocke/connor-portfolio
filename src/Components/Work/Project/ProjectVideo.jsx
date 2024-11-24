import { useContext } from "react";
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

export default function ProjectVideo({ project, useSmallVideo }) {
  const themeContext = useContext(ThemeContext);

  const videoWidth = useSmallVideo
    ? themeContext.smallProjectMediaSizePixels
    : themeContext.largeProjectMediaSizePixels;

  return (
    <>
      {project.otherVideoLink && <OtherVideo src={project.otherVideoLink} $smallVideo={useSmallVideo} controls />}
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

  width: ${({ theme, $smallVideo }) =>
    $smallVideo ? theme.smallProjectMediaSizePixels : theme.largeProjectMediaSizePixels}px;

  height: ${({ theme, $smallVideo }) =>
    ($smallVideo ? theme.smallProjectMediaSizePixels : theme.largeProjectMediaSizePixels) * theme.mediaRatio}px;
`;
