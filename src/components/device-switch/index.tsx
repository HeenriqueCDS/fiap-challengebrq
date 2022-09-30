import { Flex, Icon, Switch, Text} from "@chakra-ui/react"
import { DeviceSwitchProps } from "./types"

export const DeviceSwitch = ({icon, name}: DeviceSwitchProps) => {
    return (
        <Flex w="100%" >
            <Flex fontSize="xl" justifyContent="space-between" w="100%" alignItems="center">
                <Text display="flex" alignItems="center">
                    <Icon aria-label="Lâmpada" fontSize="24px" as={icon} mr="2" /> 
                    {name}
                </Text>
                <Switch />
            </Flex>
        </Flex>
    )
}