import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

import ImageTrash from "./assets/trash.png"

import { Container, Card, H1, P, Inputs, Button, User, Trash } from "./styled";

function App() {

  const [users, setUsers] = useState([])
  const inputName = useRef()
  const inputAge = useRef()

  async function addNewUser() {

    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value
    });


    setUsers([...users, newUser,]);


  }



  useEffect(() => {

    async function loadUsers() {
      const { data: getUsers } = await axios.get("http://localhost:3001/users")

      setUsers(getUsers)

    }
    loadUsers()

  }, [])



  function deleteUser(userID) {
    const newUsers = users.filter((user) => user.id !== userID)
    setUsers(newUsers)
  }


  return (
    <>
      <Container>
        <Card>

          <P>Olá!</P>
          <H1>Cadastre-se!</H1>

          <Inputs ref={inputName} placeholder="Nome"></Inputs>
          <Inputs ref={inputAge} placeholder="Idade"></Inputs>

          <Button onClick={addNewUser}>
            Cadastrar
          </Button>
          <ul>
            {users.map(user => (
              <User key={user.id}>
                <p>{user.name}</p>
                <p>{user.age}</p>
                <Trash onClick={() => deleteUser(user.id)}>
                  <img src={ImageTrash} alt="trash" />
                </Trash>
              </User>
            ))
            }
          </ul>
        </Card>
      </Container>
    </>
  )
}


export default App;
