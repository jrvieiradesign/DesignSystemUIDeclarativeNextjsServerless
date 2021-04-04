import React from 'react';
import { Flex as FormFlex, FlexProps as FormProps } from "@chakra-ui/react";
// import { Container } from './styles';

const Form: React.FC<FormProps> = (props) => {
  return (
    <FormFlex 
      as='form'
      gridArea='form'
      height='100%'
      backgroundColor='gray.700'
      borderRadius='md'
      flexDir='column'
      alignItems='stretch'
      padding={16}
      {...props}
    />
    );
   }
 
 export default Form;
