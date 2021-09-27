import React from "react"
import styled from "styled-components"

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
        avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
        excerpt="My name is Daniel an im from Brazil, Ibura!"
      />

      <User 
        username="Darline Cabral"
        avatar="https://s3.amazonaws.com/uifaces/faces/twitter/avladarbatov/128.jpg"
        excerpt="My name is Daniel an im from Brazil, Ibura!"
      />

    </Container>
    )
}
