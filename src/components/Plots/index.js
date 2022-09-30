import React from 'react'
import {
    Box
} from '@chakra-ui/react'

import InfoBlock from './components/InfoBlock'
import Gradient from './components/Gradient'
import PlotsBlock from './components/PlotsBlock'

function Plots() {
    return (
        <Box
        //width='100%'
        >
            <InfoBlock />
            <Gradient />
            <PlotsBlock />
        </Box>
    )
}

export default Plots;