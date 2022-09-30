import { Flex, Text } from "@chakra-ui/react"
import { ControllerDeviceProps } from "./types"

export const ControllerDevice = ({ name, value }: ControllerDeviceProps) => {
    return (

        <Flex pl="2" bg="background.bg" width="100%" maxW="300px" borderRadius="6px" justifyContent="space-between" alignItems="Center">
            <Text>{name}</Text>
            <Flex bg="background.md" p="2" w="16" alignItems="center" justifyContent="center" borderRightRadius="6px" color="green.300">
                {value.toString()}
            </Flex>
        </Flex>
    )
}