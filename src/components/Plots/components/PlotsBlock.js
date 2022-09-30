import React from 'react'
import {
    Box
} from '@chakra-ui/react'

import bgplan from '../../../img/background/план.png'

function PlotsBlock() {
    return (
        <Box
            background={`url(${bgplan})`}
            //backgroundPosition='center'
            backgroundRepeat='no-repeat'
            backgroundSize='cover'
            minHeight='100vh'
        >
            lndfln
        </Box>
    )
}

export default PlotsBlock;