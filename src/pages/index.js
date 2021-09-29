import React from "react"
import styled from "styled-components"
import perfil from "./ronin.png"

const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-itens: center;
  justify-content: center;
  border: 4px solid yellow;
`
const UserWrapper = styled.div`
  display: flex;
  align-itens: center;
  margin: 0 auto 12px auto;
  &:last-child {
    margin-bottom: 0;
  }
`
const Avatar = styled.img`
  flex: 0 0 96px;
  width: 96px;
  height: 96px;
  margin: 0;
    &:nth-of-type(1) {
      border-radius: 50px;
  }
`
const Description = styled.div`
  flex 1;
  margin-left: 18px;
  padding: 12px;
`
const Username = styled.h2`
  margin: 0 0 12px 0;
  padding: 0;
`
const Excerpt = styled.p`
  margin: 0;
`
const User = props => (
  <UserWrapper>
    <Avatar src={props.avatar} alt="" />
    <Avatar src={props.avatar} alt="" />
    <Description>
      <Username>{props.username}</Username>
      <Excerpt>{props.excerpt}</Excerpt>
    </Description>  
  </ UserWrapper>
  )

export default function UserList() {
  return (
    <Container>
      <h1>About Styled Components</h1>
      <p>mostrando algo com estilo</p>
      <User 
        username="Daniel Santos"
        avatar= {perfil}
        excerpt="My name is Daniel an im from Brazil, Ibura!"
      />

      <User 
        username="Darline Cabral"
        avatar="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
        excerpt="My name is Daniel an im from Brazil, Ibura!"
      />

      <User 
        username="Iris Cabral de Oliveira"
        avatar="https://t3.ftcdn.net/jpg/03/91/19/22/360_F_391192211_2w5pQpFV1aozYQhcIw3FqA35vuTxJKrB.jpg"
        excerpt="My name is Daniel an im from Brazil, Ibura!"
      />

      

    </Container>
    )
}
