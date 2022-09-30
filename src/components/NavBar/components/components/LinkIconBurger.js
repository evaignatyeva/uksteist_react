import React from 'react'

import {
    Box,
    Link,
    Image
} from '@chakra-ui/react'

import inst from '../../../../img/icons/instagram.svg'
import facebook from '../../../../img/icons/facebook.svg'

const LinkIconBurger = () => {
    return (
        <Box
            display={{ base: 'flex', md: 'none' }}
            paddingBottom='23px'
            zIndex='30'
        >
            <Link href='##'>
                <Box
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    width='19px'
                    height='19px'
                    borderRadius='50%'
                    backgroundColor='gray.250'
                    marginRight='24px'
                    _hover={{
                        '@media (hover:hover)': {
                            transition: 'all 0.5s ease 0s',
                            backgroundColor: 'green.150'
                        }
                    }}
                >

                    <Image src={inst} alt='instagram' />
                </Box>
            </Link>
            <Link href='##'>
                <Box
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    width='19px'
                    height='19px'
                    borderRadius='50%'
                    backgroundColor='gray.250'
                    _hover={{
                        '@media (hover:hover)': {
                            transition: 'all 0.5s ease 0s',
                            backgroundColor: 'green.150'
                        }
                    }}
                >
                    <Image src={facebook} alt='facebook' />
                </Box>
            </Link>
        </Box>
    )
}

export default LinkIconBurger;