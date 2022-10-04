import { Flex, ResponsiveValue, useBreakpointValue } from "@chakra-ui/react"
import { BrowserRouter as Router, Outlet, Route} from "react-router-dom"
import { Sidebar } from "./components/sidebar"

const App = () => {

  const flexDir = useBreakpointValue({
    base: "column",
    lg: "row",
  }) as ResponsiveValue<"row" | "column">

  return (
    <Flex bg="background.bg" minH="100vh" flexDir={flexDir}>
        <Sidebar />
        <Outlet/>
    </Flex>
  )
}

export default App
