import { Flex, Text, Image, Spinner } from "@chakra-ui/react"
import { CameraCardProps } from "./types"

export const CameraCard = ({ title, videoUrl }: CameraCardProps) => {
    return (
        <Flex borderRadius="6px" bg="background.fg" maxW={734} flexDir="column" h="fit-content" paddingTop="4">
            <Text fontWeight="medium" ml="4" mb="4">{title}</Text>
            {videoUrl ?
                <Image loading="lazy" w="100%" h="100%" maxW={734} maxH={564} objectFit="cover" src={videoUrl} alt="Entrance" />
                :
                <Spinner />
            }

        </Flex>
    )
}