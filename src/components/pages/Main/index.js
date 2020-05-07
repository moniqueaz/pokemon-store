import React from 'react';
import {
  Wrapper,
  Image,
  ImageType,
  Button,
  ButtonContaienr,
  Label,
  Footer,
  Content,
} from './styles';

const Main = () => {
  return (
    <Wrapper>
      <Content>
        <Image src="/images/pokemon-logo.png" alt="" />
        <ButtonContaienr>
          <Button
            target="_black"
            href="https://pokemon-store-fire.herokuapp.com/catalog"
          >
            <ImageType image="/images/fire.jpg" />
            <Label>Fire</Label>
          </Button>
          <Button
            target="_black"
            href="https://pokemon-store-water.herokuapp.com/catalog"
          >
            <ImageType image="/images/water.jpg" />
            <Label>Water</Label>
          </Button>
          <Button
            target="_black"
            href="https://pokemon-store-dragon.herokuapp.com/catalog"
          >
            <ImageType image="/images/dragon.jpg" />
            <Label>Dragon</Label>
          </Button>
          <Button
            target="_black"
            href="https://pokemon-store-grass.herokuapp.com/catalog"
          >
            <ImageType image="/images/grass.jpg" />
            <Label>Grass</Label>
          </Button>
          {/* <Button
            target="_black"
            href="https://pokemon-store-eletric.herokuapp.com/catalog"
          >
            <ImageType image="/images/eletric.png" />
            <Label>Eletric</Label>
          </Button> */}
        </ButtonContaienr>
      </Content>
      <Footer>Pokemon</Footer>
    </Wrapper>
  );
};

export default Main;
