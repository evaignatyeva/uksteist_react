import React from 'react'
import {
    Box,
    Image
} from '@chakra-ui/react'

import road from '../../../img/icons/Vector 86.png'

function Gradient() {
    return (
        <Box
            height='600px'
            backgroundColor='green.50'
            background={`url(${road})`}
        >
            <Box

            >
                <Image src={road}></Image>
            </Box>
        </Box>
    )
}

export default Gradient