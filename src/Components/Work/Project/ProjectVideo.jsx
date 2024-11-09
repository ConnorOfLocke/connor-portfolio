import { useState, useCallback, useContext, useEffect } from "react";
import styled, { ThemeContext } from "styled-components";

function parseYoutubeLink(youtubeLink) {
  //find if it already has the embed link
  const isEmbeded = youtubeLink.search("https://www.youtube.com/embed/") >= 0;
  if (!isEmbeded) {
    //get the code at the end
    const linkCode = youtubeLink.split("/watch?v=")[1];
    return `https://www.youtube.com/embed/${linkCode}`;
  }

  return youtubeLink;
}

const bigVid = 520;
const smallVid = 400;
const heightRatio = 9.0 / 16.0;

export function ProjectVideo({ project }) {
  const themeContext = useContext(ThemeContext);
  const [videoWidth, setVideoWidth] = useState(bigVid);

  //Resize the video
  const handleResize = useCallback(() => {
    setVideoWidth((prevWidth) => {
      const newVidWith = window.matchMedia(`(min-width: ${themeContext.mediumScreen})`).matches ? bigVid : smallVid;
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
    <Video
      src={parseYoutubeLink(project.youtubeLink)}
      allow="encrypted-media"
      referrerPolicy="strict-origin-when-cross-origin"
      width={`${videoWidth}px`}
      height={`${videoWidth * heightRatio}px`}
    />
  );
}

/*<div style="padding:100% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/660224868?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="playEd  Video 1"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>*/

const Video = styled.iframe`
  min-width: 320px;
  box-shadow: 0px 0px 0px, 3px 3px 3px ${(props) => props.theme.light.headerTextColor};
`;
