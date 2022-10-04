import { Flex, SimpleGrid, useBreakpointValue, useToast } from "@chakra-ui/react"

import { ControllerList } from "../controller-list"
import { ControllerDevice } from "../controller-list/controller-device"

import { BsFillLockFill, BsFillUnlockFill, BsLightbulbFill, BsLightbulbOffFill } from "react-icons/bs"

export const GlobalController = () => {

    const toast = useToast()

    const maxH = useBreakpointValue({
        base: "100%",
        lg: "310px",
    })
    return (
        <Flex mt="4" bg="background.fg" w="100%" h="100%" maxH={maxH} borderRadius="6px" p="8">
            <SimpleGrid w="100%" columns={[1, 1, 1, 4]} spacing="8">
                <ControllerList title="Sensores">
                    <ControllerDevice name="Sensor de gás" value="OK" />
                    <ControllerDevice name="Detector de fumaça" value="OK" />
                </ControllerList>
                <ControllerList
                    title="Portas"
                    isControlled 
                    turnOff={{
                        tooltip: "Fechar todas as portas",
                        onClick: () => toast({title: "Portas trancadas", status: "success"})
    
                    }}             
                    turnOn={{
                        tooltip: "Abrir todas as portas",
                        onClick: () => toast({title: "Portas abertas", status: "success"})
                    }}
                    turnOffIcon={BsFillLockFill}
                    turnOnIcon={BsFillUnlockFill}
                >
                    <ControllerDevice name="Trancadas" value="2" />
                    <ControllerDevice name="Abertas" value="1" />
                </ControllerList>
                <ControllerList
                    title="Luzes"
                    isControlled 
                    turnOff={{
                        tooltip: "Desligar todas as luzes",
                        onClick: () => toast({title: "Luzes desligadas", status: "success"})
    
                    }}             
                    turnOn={{
                        tooltip: "Ligar todas as luzes",
                        onClick: () => toast({title: "Luzes ligadas", status: "success"})
                    }}
                    turnOnIcon={BsLightbulbFill}
                    turnOffIcon={BsLightbulbOffFill}
                >
                    <ControllerDevice name="Ligadas" value="3" />
                    <ControllerDevice name="Desligadas" value="0" />
                </ControllerList>
            </SimpleGrid>
        </Flex>
    )
}