import { Flex, SimpleGrid } from "@chakra-ui/react"

import { ControllerList } from "../controller-list"
import { ControllerDevice } from "../controller-list/controller-device"

export const GlobalController = () => {
    return (
        <Flex mt="4" bg="background.fg" w="100%" h="100%" maxH="310px" borderRadius="6px" p="8">
            <SimpleGrid w="100%" columns={[1, 1, 1, 4]} spacing="8">
                <ControllerList title="Sensores">
                    <ControllerDevice name="Sensor de gás" value="OK" />
                    <ControllerDevice name="Detector de fumaça" value="OK" />
                </ControllerList>
                <ControllerList title="Portas">
                    <ControllerDevice name="Trancadas" value="2" />
                    <ControllerDevice name="Abertas" value="1" />
                </ControllerList>
                <ControllerList title="Luzes">
                    <ControllerDevice name="Ligadas" value="3" />
                    <ControllerDevice name="Desligas" value="0" />
                </ControllerList>
                <ControllerList title="Luzes">
                    <ControllerDevice name="Ligadas" value="3" />
                    <ControllerDevice name="Desligas" value="0" />
                </ControllerList>
            </SimpleGrid>
        </Flex>
    )
}