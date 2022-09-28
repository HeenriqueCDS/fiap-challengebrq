import { Flex, SimpleGrid } from "@chakra-ui/react"

import { AppLayout } from "../../components/app-layout"
import { CameraCard } from "../../components/camera-card"

import entrance from "../../assets/cctv/entrance.gif"


export const GaragePage = () => {
    return (
        <AppLayout>
            <Flex justifyContent="space-between" borderRadius="6px">
                <CameraCard title="Câmera exterior" videoUrl={entrance} />
                <Flex bg="background.fg" w="400px" h="100%" borderRadius="6px">

                </Flex>
            </Flex>
            <Flex mt="4" bg="background.fg" w="100%" h="100%" borderRadius="6px">

            </Flex>
        </AppLayout>
    )
}