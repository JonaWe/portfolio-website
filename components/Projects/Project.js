import Image from 'next/image';
import {
  ProjectCard,
  ProjectInfo,
  ProjectTitle,
  ProjectDescription,
} from './Projects.elements';

export default function Project({ name, description, url, image }) {
  return (
    <ProjectCard>
      <Image src={image} width={400} height={400} />
      <ProjectInfo>
        <ProjectTitle>{name}</ProjectTitle>
      </ProjectInfo>
    </ProjectCard>
  );
}
