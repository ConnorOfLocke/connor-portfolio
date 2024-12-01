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

export default function ProjectVideo({ project, videoSize }) {
  const themeContext = useContext(ThemeContext);

  const VideoSizes = {
    sm: themeContext.smallProjectMediaSizePixels,
    md: themeContext.mediumProjectMediaSizePixels,
    lg: themeContext.largeProjectMediaSizePixels,
  };

  const videoWidth = videoSize && VideoSizes[videoSize] ? VideoSizes[videoSize] : VideoSizes.sm;

  return (
    <>
      {project.otherVideoLink && <OtherVideo src={project.otherVideoLink} $videoSize={videoWidth} controls />}
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
`;

const OtherVideo = styled.video`
  border: 0;
  width: ${({ $videoSize }) => $videoSize}px;
  height: ${({ theme, $videoSize }) => $videoSize * theme.mediaRatio}px;
`;
