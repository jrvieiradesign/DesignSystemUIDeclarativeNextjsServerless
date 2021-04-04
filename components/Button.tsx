import React from 'react';
import { Button as ChakraButton, ButtonProps as ChakraProps } from "@chakra-ui/react";
// import { Container } from './styles';

const Button: React.FC<ChakraProps> = (props) => {
  return (
    <ChakraButton
    borderRadius='sm'
    height='50px'
    {...props}
    />

  );
}

export default Button;