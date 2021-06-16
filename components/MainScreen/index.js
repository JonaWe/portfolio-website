import { ViewBox, MoreButton, Title, SubTitle } from './MainScreen.elements';

export default function MainScreen() {
  return (
    <ViewBox id="home">
      <div>
        <Title>Jona Wessendorf</Title>
        <SubTitle>Web Developer and Photograph</SubTitle>
        <MoreButton href="#about">More About me</MoreButton>
      </div>
    </ViewBox>
  );
}
