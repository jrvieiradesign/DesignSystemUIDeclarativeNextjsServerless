import Head from 'next/head'
import Divider from "../components/Divider";
import DarkMode from "../components/DarkMode";
import { Heading, Grid, Flex, Input, Link, Button, Text } from "@chakra-ui/react";
import LogoRocket from "../assets/RockeseatLogo.svg";

export default function Home() {
  // const color = useColorModeValue("blue.900", "white")
  return (
   <Grid
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
   > 
    <Flex gridArea="logo" flexDir="column" alignItems="start">
    <LogoRocket />

    <Heading size='2xl' lineHeight="shorter" marginTop={16}>Faça seu login na plataforma</Heading>
    </Flex>

    <Flex
      gridArea='form'
      height='100%'
      backgroundColor='gray.700'
      borderRadius='md'
      flexDir='column'
      alignItems='stretch'
      padding={16}
      >
      
      <Input 
        height='50px'
        backgroundColor='gray.800'
        focusBorderColor='purple.500'
        borderRadius='sm'
        placeholder='E-mail'
      />
      <Input 
        height='50px'
        backgroundColor='gray.800'
        focusBorderColor='purple.500'
        borderRadius='sm'
        placeholder='Senha'
        marginTop={2}
      />

      <Link
       alignSelf='flex-start'
       marginTop={2}
       fontSize='sm'
       color='purple.600'
       fontWeight='bold'
       _hover={{ color: 'purple.500' }}
      >
       Esqueci minha senha
      </Link>
      <Button
        borderRadius='sm'
        height='50px'
        backgroundColor='purple.500'
        marginTop={6}
        _hover={{ backgroundColor: 'purple.600' }}
      >
        ENTRAR</Button>

        <Text
        textAlign='center'
        fontSize='sm'
        color='gray.300'
        marginTop={6}
        >
          Não tem uma conta? {"    "}
        <Link
        color='purple.600'
        fontWeight='bold'
        _hover={{ color: 'purple.500' }}
        >
          Registre-se
        </Link>
        </Text>
        <Divider />
        <Flex alignItems='center'>
          <Text fontSize='sm'>Ou entre com</Text>
          <Button
            height='50px'
            flex='1'
            backgroundColor='gray.600'
            marginLeft={6}
            borderRadius='sm'
            _hover={{ backgroundColor: 'purple.500' }}
          >
            GITHUB
          </Button>
        </Flex>
    </Flex>
   </Grid>
  )
}
