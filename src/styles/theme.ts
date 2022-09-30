import { ChakraTheme, extendTheme } from '@chakra-ui/react'
import { theme as baseTheme } from '@saas-ui/react'

// 3. Extend the theme to include custom colors, fonts, etc
export const theme = extendTheme(
    {
        styles: {
            global: {
                body: {
                    fontFamily: 'Roboto, sans-serif',
                },
            }
        },
        initialColorMode: 'dark',
        colors: {
            background: {
                fg: '#181818',
                bg: '#141414',
                md: '#525252',
            }
        },
        components: {
        },
    },
    baseTheme
) 
