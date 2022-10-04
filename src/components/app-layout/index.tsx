import { Flex } from "@chakra-ui/react"
import { AppLayoutProps } from "./types"

export const AppLayout = ({children}: AppLayoutProps) => {
    return (
        <Flex w="100%" h="100%" padding="16" color="whiteAlpha.900" flexDir="column">
            {children}
        </Flex>
    )
}