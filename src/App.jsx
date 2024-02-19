import { Route, Routes } from "react-router-dom"
import { BooksData } from "./BooksData/BooksData"
import NavBar from "./NavBar/NavBar"
import {RegistrationForm} from "./Form/RegistrationForm"

function App() {

  return (
    <>
    <NavBar/>
      <Routes>

      <Route path="/book" element = {<BooksData/>}/>
      <Route path="/registrationForm" element = {<RegistrationForm/>}/>

     </Routes>
     

    </>
  )
  }

export default App
