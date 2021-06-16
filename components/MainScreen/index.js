import { ViewBox, MoreButton, Title, SubTitle } from './MainScreen.elements';

export default function MainScreen() {
  return (
    <ViewBox>
      <div>
        <Title>Jona Wessendorf</Title>
        <SubTitle>Web Developer, Photograph, Developer</SubTitle>
        <MoreButton href="#about">More About me</MoreButton>
      </div>
    </ViewBox>
  );
}
