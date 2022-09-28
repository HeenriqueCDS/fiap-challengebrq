import { Flex, VStack } from "@chakra-ui/react"

import { NavItem } from "../nav-item"

import { GiHomeGarage, GiCctvCamera } from "react-icons/gi"
import { BsFillHouseFill, BsGearFill } from "react-icons/bs"
import { FaUser } from "react-icons/fa"

export const Sidebar = () => {
    return (
        <Flex
            bg="background.fg"
            w="40"
            h="100vh"
            flexDir="column"
            py="8"
            alignItems='center'
            justifyContent='space-between'
        >
            <VStack spacing="4">
                <NavItem path="/" Icon={GiHomeGarage} />
                <NavItem path="/house" Icon={BsFillHouseFill} />
                <NavItem path="/security" Icon={GiCctvCamera} />
            </VStack>
            <VStack spacing="4">
                <NavItem inactive path="/config" Icon={BsGearFill} />
                <NavItem inactive path="/user" Icon={FaUser} />
            </VStack>
        </Flex>
    )
}