// import React, {useState} from 'react'
// import Formulario from './Formulario'

// export default function App() {

//   const [status, setStatus] = useState(false)

//   function handleStatus(){
//     setStatus(!status)
//   }

//   return (
//     <div >
//       <button onClick={()=>{handleStatus()}}> Bora </button>
//       {status && <Formulario />}
//     </div>
//   )
// }

import React, { useState } from 'react'

export default function App() {
  const [status, setStatus] = useState(false)

  const Lista = () => {
    return (
      <div>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </div>
    )
  }
  return (
    <>
      <button
        onClick={() => {
          setStatus(!status);
        }}
      >
        {" "}
        {status ? "🌂" : "☂️"}{" "}
      </button>
      {status && Lista()}
    </>
  )
}

// import React,{useState} from 'react'
// import Modal from 'react-modal'
// import styled from 'styled-components'

// // const SModal = styled(Modal)`

// // `

// export default function App(){

// const [status, setStatus] = useState(false)

// function handleModal(){
//   setStatus(!status)
// }

//   return(
//     <>
//     <button onClick={() => {handleModal()}}>Open</button>

//   <Modal
//   onRequestClose={handleModal}
//   isOpen={status}
//   style={{overlay: {
//     backgroundColor: 'red'
//   }, content:{
//        border: 'solid'
//   }}}
//   >
//     <ul>
//       <li>1</li>
//       <li>2</li>
//       <li>3</li>
//       <li>4</li>
//     </ul>
//     <button onClick={() => {handleModal()}}>Close</button>
// </Modal>
//     </>
//   )
// }
