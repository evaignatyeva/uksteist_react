import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    styles: {
        global: {
            body: {
                fontFamily: 'montserrat',
                color: 'black',
                backgroundColor: 'gray.50'
            },
        },
    },
    colors: {
        black: '#1D1F1D',
        gray: {
            50: '#F8F8F8',
            100: '#F7F4F4',
            150: '#CFD3D0',
            200: '#858685',
            250: '#3F3F3F'
        },
        green: {
            50: '#AFAB4A',
            100: '#77833F',
            150: '#314C51',
        }
    },
    breakpoints: {
        sm: '479.98',
        md: '767.98',
        lg: '991.98',
        xl: '1248px',
    },
})

export default theme;