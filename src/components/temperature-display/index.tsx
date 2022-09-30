import { Flex, HStack, IconButton, Text } from "@chakra-ui/react"
import { TemperatureDisplayProps } from "./type"
import { FaTemperatureHigh } from "react-icons/fa"

export const TemperatureDisplay = ({ location, temperature, isControlled }: TemperatureDisplayProps) => {
    return (
        <Flex padding="8" alignItems="center" justifyContent="space-between">
            <Text fontWeight="medium" fontSize="xl">{location}</Text>
            {isControlled ?
                <HStack >
                    <IconButton fontSize="20" h="12" w="12"_hover={{bg: "whiteAlpha.50"}} variant="ghost" colorScheme="purple" aria-label="Configurar arcondicionado" icon={<FaTemperatureHigh/>}/>
                    <Text fontWeight="medium" fontSize="xl">{temperature}º C</Text>
                </HStack>
                :
                <Text fontWeight="medium" fontSize="xl">{temperature}º C</Text>
            }

        </Flex>
    )
}