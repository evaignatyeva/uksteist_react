import React from 'react';
import {
    Box,
    Image
} from '@chakra-ui/react'

import Title from './components/Title'
import foto from '../../img/icons/Mask Group.png'

function Header() {
    return (
        <Box
            maxWidth='1248px'
            margin='0 auto'
            //minHeight='100vh'
            padding='170px 20px 0px'
            display={{ base: 'block', md: 'flex' }}
            justifyContent='center'
            textAlign={{ base: 'center', md: 'unset' }}
        >
            <Box
                paddingRight={{ base: '0px', md: '60px', lg: '70px' }}
                width={{ base: '210px', sm: '250px', md: 'unset' }}
                margin={{ base: '0 auto', md: 'unset' }}
            >
                <Image src={foto} alt='11' />
            </Box>
            <Title />
        </Box>
    )
}

export default Header;