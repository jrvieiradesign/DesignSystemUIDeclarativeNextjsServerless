import Head from "next/head";
import Divider from "../components/Divider";
import DarkMode from "../components/DarkMode";
import { Heading, Flex, Link, Text } from "@chakra-ui/react";
import LogoRocket from "../assets/RockeseatLogo.svg";
import { FormEvent, useState } from "react";
import axios from "axios";
import Form from "../components/Form";
import Main from "../components/Main";
import Input from "../components/Input";
import Button from "../components/Button";
export default function Home() {
  const [email, setEmail] = useState("");

  function handleSignUpToNewsletter(event: FormEvent) {
    event.preventDefault();

    axios.post("/api/subscribe", { email });
  }
  // const color = useColorModeValue("blue.900", "white")
  return (
    <Main>
      <Flex gridArea="logo" flexDir="column" alignItems="start">
        <LogoRocket />
        <Heading size="2xl" lineHeight="shorter" marginTop={16}>
          Faça seu login na plataforma
        </Heading>
      </Flex>

      <Form onSubmit={handleSignUpToNewsletter}>
        <Input
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input placeholder="Senha" marginTop={2} />

        <Link
          alignSelf="flex-start"
          marginTop={2}
          fontSize="sm"
          color="purple.600"
          fontWeight="bold"
          _hover={{ color: "purple.500" }}
        >
          Esqueci minha senha
        </Link>

        <Button
          type="submit"
          marginTop={6}
          backgroundColor="purple.500"
          _hover={{ backgroundColor: "purple.600" }}
        >
          ENTRAR
        </Button>

        <Text textAlign="center" fontSize="sm" color="gray.300" marginTop={6}>
          Não tem uma conta? {"    "}
          <Link
            color="purple.600"
            fontWeight="bold"
            _hover={{ color: "purple.500" }}
          >
            Registre-se
          </Link>
        </Text>

        <Divider />

        <Flex alignItems="center">
          <Text fontSize="sm">Ou entre com</Text>

          <Button
            flex="1"
            backgroundColor="gray.600"
            marginLeft={6}
            _hover={{ backgroundColor: "purple.500" }}
          >
            GITHUB
          </Button>
        </Flex>
      </Form>
    </Main>
  );
}
