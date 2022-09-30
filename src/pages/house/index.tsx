import { Flex, Divider, VStack, Heading } from "@chakra-ui/react"

import { AppLayout } from "../../components/app-layout"
import { CameraCard } from "../../components/camera-card"
import { DeviceSwitch } from "../../components/device-switch"
import { GlobalController } from "../../components/global-controller"
import { TemperatureDisplay } from "../../components/temperature-display"

import { GiGate } from "react-icons/gi"
import { HiLightBulb } from "react-icons/hi"
import livingRoom from "../../assets/cctv/living-room.gif"

export const HousePage = () => {
    return (
        <AppLayout>
            <Flex justifyContent="space-between" borderRadius="6px">
                <CameraCard title="Câmera exterior" videoUrl={livingRoom} />
                <Flex bg="background.fg" w="400px" h="100%" borderRadius="6px" flexDir="column">
                    <TemperatureDisplay location="Sala de estar" isControlled temperature={10} />
                    <Divider />
                    <Flex flexDir="column" >
                        <VStack padding="8" w="100%" alignItems="flex-start" spacing="4">
                            <Heading>Luzes</Heading>
                            <DeviceSwitch name="Sala" icon={HiLightBulb} />
                            <DeviceSwitch name="Corredor 1" icon={HiLightBulb} />
                            <DeviceSwitch name="Corredor 2" icon={HiLightBulb} />
                            <DeviceSwitch name="Abajur" icon={HiLightBulb} />

                        </VStack>
                    </Flex>
                </Flex>
            </Flex>
            <GlobalController/>
        </AppLayout>
    )
}