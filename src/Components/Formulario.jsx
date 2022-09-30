import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.section`
width: 50vw;
height: 60vh;
border: solid pink;
`

export default function Formulario() {

  const [input, setInput]= useState()
  const [msg, setMsg] = useState('')

  function handleMsg(e){
    setMsg(input)
    setInput('')
   e.preventDefault()
  }

  return (
    <Container >
      <form onSubmit={handleMsg}>
      <input value={input} type='text' onChange={e => {setInput(e.target.value)}} />
      <input type='submit'/>
    </form>
    <h2>{msg}</h2>
    </Container>
  )
}