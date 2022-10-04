import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, IconButton, useBreakpointValue, useDisclosure, VStack } from "@chakra-ui/react"

import { NavItem } from "../nav-item"

import { GiHomeGarage, GiCctvCamera, GiHamburgerMenu } from "react-icons/gi"
import { BsFillHouseFill, BsGearFill } from "react-icons/bs"
import { FaUser } from "react-icons/fa"

const Navigation = () => {
    return (
        <>
            <VStack spacing="4">
                <NavItem path="/" Icon={GiHomeGarage} />
                <NavItem path="/house" Icon={BsFillHouseFill} />
                <NavItem path="/security" Icon={GiCctvCamera} />
            </VStack>
            <VStack spacing="4">
                <NavItem inactive path="/config" Icon={BsGearFill} />
                <NavItem inactive path="/user" Icon={FaUser} />
            </VStack>
        </>
    )
}

export const Sidebar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })
    if (!isWideVersion) {
        return (
            <>
                <Flex
                    bg="background.fg"
                    h="60px"
                    flexDir="column"
                    alignItems='center'
                    justifyContent='center'
                >
                    <IconButton 
                    colorScheme="whiteAlpha" 
                    aria-label="Abrir menu" 
                    icon={<GiHamburgerMenu />} 
                    onClick={onOpen} 
                    />
                </Flex>
                <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
                    <DrawerOverlay />
                    <DrawerContent bg="background.fg">
                    <DrawerCloseButton color="whiteAlpha.500" size='lg' />
                        <DrawerHeader borderBottomWidth='1px'  color="whiteAlpha.500">SmartHome Controller</DrawerHeader>
                        <DrawerBody display="flex"  flexDir="column" justifyContent="space-between">
                            <Navigation />
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </>
        )
    }

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
            <Navigation/>
        </Flex>
    )
}