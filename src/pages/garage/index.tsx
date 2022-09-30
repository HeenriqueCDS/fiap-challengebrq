import { Divider, Flex, Text, SimpleGrid, VStack, Heading, Icon, Switch } from "@chakra-ui/react"

import { AppLayout } from "../../components/app-layout"
import { CameraCard } from "../../components/camera-card"
import { DeviceSwitch } from "../../components/device-switch"

import { HiLightBulb } from "react-icons/hi"
import { GiGate } from "react-icons/gi"
import entrance from "../../assets/cctv/entrance.gif"
import { ControllerList } from "../../components/controller-list"
import { ControllerDevice } from "../../components/controller-list/controller-device"
import { TemperatureDisplay } from "../../components/temperature-display"
import { useLocalTemperature } from "../../hooks/useTemperature"
import { GlobalController } from "../../components/global-controller"


const { temp, city } = await useLocalTemperature()

export const GaragePage = () => {

    return (
        <AppLayout>
            <Flex justifyContent="space-between" borderRadius="6px">
                <CameraCard title="Câmera exterior" videoUrl={entrance} />
                <Flex bg="background.fg" w="400px" h="100%" borderRadius="6px" flexDir="column">
                    <TemperatureDisplay location={city} temperature={temp} />
                    <Divider />
                    <Flex flexDir="column" >
                        <VStack padding="8" w="100%" alignItems="flex-start" spacing="4">
                            <Heading>Luzes</Heading>
                            <DeviceSwitch name="Interna" icon={HiLightBulb} />
                            <DeviceSwitch name="Externa" icon={HiLightBulb} />
                            <Heading>Portões</Heading>
                            <DeviceSwitch name="Entrada" icon={GiGate} />
                        </VStack>
                    </Flex>
                </Flex>
            </Flex>
            <GlobalController/>
        </AppLayout>
    )
}