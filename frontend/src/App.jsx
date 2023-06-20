import { Container } from "react-bootstrap"
import Header from "./components/header"
import { Outlet } from "react-router-dom"


function App() {
  return (
    <>
      <Header />
      <Container className="my-2">
        <Outlet />
      </Container>
    </>
  )
}

export default App
