import React from 'react';
import { Input as ChakraInput, InputProps as ChakraProps } from "@chakra-ui/react";
// import { Container } from './styles';

const Input: React.FC<ChakraProps> = (props) => {
  return (
    <ChakraInput
      height='50px'
      backgroundColor='gray.800'
      focusBorderColor='purple.500'
      borderRadius='sm'
    {...props}
    />
  );
}

export default Input;