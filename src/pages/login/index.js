import React from "react";
import { Form } from "@unform/web";
import Input from "src/components/input";

import { Container } from "./styles";

export default function SignIn() {
  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <Input name="email" type="email" placeholder="Entre com seu email" />
        <Input name="password" type="password" placeholder="Digite sua senha" />
        <p>Esqueceu sua senha?</p>

        <button type="submit">Entrar</button>
      </Form>
    </Container>
  );
}
