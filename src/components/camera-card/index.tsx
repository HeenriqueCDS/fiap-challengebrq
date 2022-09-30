import { Flex, Text, Image } from "@chakra-ui/react"
import { CameraCardProps } from "./types"

export const CameraCard = ({ title, videoUrl }: CameraCardProps) => {
    return (
        <Flex borderRadius="6px" bg="background.fg" flexDir="column" h="fit-content" paddingTop="4">
            <Text fontWeight="medium" ml="4" mb="4">{title}</Text>
            <Image w="100%" h="100%" maxW={734} maxH={564} objectFit="cover" src={videoUrl} alt="Entrance" />
        </Flex>
    )
}