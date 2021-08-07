import { useState } from 'react';
import Image from 'next/image';
import {
  ProjectCard,
  ProjectInfo,
  ProjectTitle,
  ProjectTitlePseudo,
  ProjectDescription,
} from './Projects.elements';

export default function Project({ name, description, url, image }) {
  const [hovered, setHovered] = useState();
  return (
    <ProjectCard
      imageUrl={image}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* <Image src={image} width={400} height={400} /> */}
      <ProjectInfo>
        <ProjectTitle>
          <>
            <ProjectTitlePseudo hovered={hovered}>&lt;</ProjectTitlePseudo>
            {name}
            <ProjectTitlePseudo hovered={hovered}> /&gt;</ProjectTitlePseudo>
          </>
        </ProjectTitle>
      </ProjectInfo>
    </ProjectCard>
  );
}
