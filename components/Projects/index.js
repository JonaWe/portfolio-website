import Project from './Project';

import { Title, ViewBox, ProjectList } from './Projects.elements';

export default function Projects({ projectList }) {
  return (
    <ViewBox id="projects">
      <Title>Projects</Title>
      <ProjectList>
        {projectList.map(({ name, image, description, url }) => (
          <Project
            key={name}
            name={name}
            image={image}
            description={description}
            url={url}
          />
        ))}
      </ProjectList>
    </ViewBox>
  );
}
