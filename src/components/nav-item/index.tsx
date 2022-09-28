import { IconButton } from "@chakra-ui/react"
import { useNavigate, useNavigation } from "react-router-dom"
import { NavItemProps } from "./types";

export const NavItem = ({inactive, path, Icon}: NavItemProps) => {
  const navigate = useNavigate()

  return (
    <IconButton
      colorScheme="whiteAlpha"
      w="24"
      h="24"
      variant="ghost"
      isDisabled={window.location.pathname === path}
      aria-label={path}
      icon={<Icon size="48"/>}
      onClick={() => !inactive && navigate(path)}
    />
  )
}
