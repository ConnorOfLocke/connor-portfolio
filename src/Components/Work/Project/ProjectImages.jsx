import styled from "styled-components";

export default function ProjectImages({ project }) {
  return (
    <>
      {project.images && project.images.length > 1 && (
        <ProjectImageStack>
          <ProjectOverImage src={project.images[0]} alt={project.title + 0} />
          <ProjectUnderImage src={project.images[1]} alt={project.title + 1} />
        </ProjectImageStack>
      )}

      {project.images && project.images.length === 1 && <ProjectImage src={project.images[0]} alt={project.title} />}
    </>
  );
}

const ProjectImageStack = styled.ol`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  position: relative;
`;

const ProjectImage = styled.img`
  width: fit-content;
  height: ${(props) => props.theme.largeProjectMediaSizePixels * props.theme.mediaRatio}px;
  @media (max-width: ${(props) => props.theme.mediumScreen}) {
    width: fit-content;
    height: ${(props) => props.theme.smallProjectMediaSizePixels * props.theme.mediaRatio}px;
  }
`;

//From https://bricampgomez.com/blog/how-to-overlap-images-in-css/
const ProjectOverImage = styled(ProjectImage)`
  grid-column: 1 / span 8;
  grid-row: 1;
  padding-top: 20%;
  z-index: 1;
`;

const ProjectUnderImage = styled(ProjectImage)`
  grid-column: 4 / -1;
  grid-row: 1;
`;
