import {
    VStack,
    Flex,
    Heading,
    IconButton,
    HStack,
    Icon,
    Tooltip
} from "@chakra-ui/react"

import { ControllerListProps } from "./types"

export const ControllerList = ({
    isControlled,
    title,
    children,
    turnOn,
    turnOnIcon,
    turnOff,
    turnOffIcon
}: ControllerListProps) => {
    return (
        <VStack alignItems="flex-start" w='100%' maxW='300px'>
            {isControlled ?
                <Flex justifyContent="space-between" w='100%' maxW='300px'>
                    <Heading>{title}</Heading>
                    <HStack>
                        <Tooltip label={turnOff?.tooltip}>
                            <IconButton
                                variant="ghost"
                                colorScheme="whiteAlpha"
                                aria-label={turnOff!.tooltip}
                                icon={<Icon as={turnOffIcon} />}
                                onClick={turnOff!.onClick}
                            />
                        </Tooltip>
                        <Tooltip label={turnOn?.tooltip}>
                            <IconButton
                                variant="ghost"
                                colorScheme="whiteAlpha"
                                aria-label={turnOn!.tooltip}
                                icon={<Icon as={turnOnIcon} />}
                                onClick={turnOn!.onClick}
                            />
                        </Tooltip>
                    </HStack>
                </Flex>
                :
                <Heading>{title}</Heading>
            }
            {children}
        </VStack>
    )
}