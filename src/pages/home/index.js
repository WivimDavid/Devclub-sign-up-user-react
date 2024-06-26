import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import Card  from "../../components/card";
import  H1  from "../../components/title";
import Button from "../../components/button";

import { Container, P, Inputs } from "./styled";

function App() {
  const history = useHistory();
  const [users, setUsers] = useState([])
  const inputName = useRef()
  const inputAge = useRef()

  async function addNewUser() {

    const { data: newUser } = await axios.post("https://devclub-sign-up-users-backend.onrender.com/users", {
      name: inputName.current.value,
      age: inputAge.current.value
    });

    setUsers([...users, newUser,]);

    history.push("/usuarios");
  }


  return (
    <>
      <Container>
        <Card>

          <P>Olá!</P>
          <H1>Cadastre-se!</H1>

          <Inputs ref={inputName} placeholder="Nome"></Inputs>
          <Inputs ref={inputAge} placeholder="Idade"></Inputs>

          <Button onClick={addNewUser} >
            Cadastrar
          </Button>
        </Card>
      </Container>
    </>
  )
}


export default App;
