import { SimpleGrid } from "@chakra-ui/react"

import { AppLayout } from "../../components/app-layout"
import { CameraCard } from "../../components/camera-card"

import livingRoom from "../../assets/cctv/living-room.gif"
import entrance from "../../assets/cctv/entrance.gif"

export const SecurityPage = () => {
    return (
        <AppLayout>
            <SimpleGrid columns={[1, 1, 1, 2]} spacing="8">
                <CameraCard title="Câmera exterior" videoUrl={entrance} />
                <CameraCard title="Câmera sala" videoUrl={livingRoom} />
            </SimpleGrid>
        </AppLayout>
    )
}