import { useState } from 'react';
import Project from './Project';

import { Title, ViewBox, ProjectList } from './Projects.elements';

export default function Projects({ projectList }) {
  const [hovered, setHovered] = useState();
  return (
    <ViewBox id="projects">
      <Title
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        &lt;Projects{hovered && ' limit={4}'}&gt;
      </Title>
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
      <Title>&lt;/Projects&gt;</Title>
    </ViewBox>
  );
}
