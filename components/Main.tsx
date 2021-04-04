import React from 'react';
import { Grid as GridMain, GridProps as MainProps } from "@chakra-ui/react";
// import { Container } from './styles';

const Main: React.FC<MainProps> = (props) => {
  return (
    <GridMain
    as='main'
    h="100vh"
    templateColumns='1fr 480px 480px 1fr'
    templateRows='1fr 480px 1fr'
    templateAreas="
      '. . . .'
      '. logo form . '
      '. . . .'
    "
    justifyContent="center"
    alignItems="center" 
    {... props}
    />
  );
}

export default Main;