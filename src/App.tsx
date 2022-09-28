import { Flex } from "@chakra-ui/react"
import { BrowserRouter as Router, Outlet, Route} from "react-router-dom"
import { Sidebar } from "./components/sidebar"

const App = () => {

  return (
    <Flex bg="background.bg" w="100vw" h="100vh" flexDir="row">
        <Sidebar />
        <Outlet/>
    </Flex>
  )
}

export default App
