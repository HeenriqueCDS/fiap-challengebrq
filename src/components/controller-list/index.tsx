import { VStack, Flex, Heading, Text } from "@chakra-ui/react"
import { ControllerListProps } from "./types"

export const ControllerList = ({ isControlled, title, children }: ControllerListProps) => {
    return (
        <VStack alignItems="flex-start">
            {isControlled ?
                <Flex justifyContent="space-between"><Heading>{title}</Heading></Flex>
                :
                <Heading>{title}</Heading>
            }
            {children}
        </VStack>
    )
}