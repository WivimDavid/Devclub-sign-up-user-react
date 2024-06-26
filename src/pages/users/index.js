import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import Card  from "../../components/card";
import  H1  from "../../components/title";
import Button from "../../components/button";
import ImageTrash from "../../assets/trash.png"

import { Container, P, User, Trash } from "./styled";

function Users() {
  const history = useHistory();
  const [users, setUsers] = useState([])

  useEffect(() => {

    async function loadUsers() {
      const { data: getUsers } = await axios.get("https://devclub-sign-up-users-backend.onrender.com/users")

      setUsers(getUsers)

    }
    loadUsers()

  }, [])



  async function deleteUser(userID) {
    await axios.delete(`https://devclub-sign-up-users-backend.onrender.com/users/${userID}`)

    const newUsers = users.filter((user) => user.id !== userID)

    setUsers(newUsers)
  }

  function goBackPage() {
    history.push("/");
  }

  return (
    <>
      <Container>
        <Card>

          <P>Olá!</P>
          <H1>Usuários!</H1>

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
          <Button onClick={goBackPage} >
            Voltar
          </Button>
        </Card>
      </Container>
    </>
  )
}


export default Users;
