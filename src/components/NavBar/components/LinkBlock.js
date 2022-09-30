import React, { useContext, useState } from 'react'

import {
    Box,
    Link,
    Image,
} from '@chakra-ui/react'

import LinkIcon from './components/LinkIcon'
import logo from '../../../img/icons/logo.png'
import phone from '../../../img/icons/Fill 7.svg'
import { LanguageContext } from '../../../context/LanguageProvider'


function LinkBlock({ isActive, setIsActive, colorNavbar }) {
    const { currentLanguage } = useContext(LanguageContext)
    return (
        <Box
            margin='0 auto'
            maxWidth='1248px'
            position={{ base: 'fixed', md: 'unset' }}
            width={{ base: '100%', md: 'unset' }}
            zIndex='30'
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            padding={{ base: '24px 35px', sm: '15px 20px 0px' }}
            backgroundColor={colorNavbar ? 'rgba(245, 248, 248, 1)' : 'none'}
            transition='background-color 0.3s ease 0s'
        >
            <LinkIcon
                isActive={isActive}
            />
            <Box
                width={{ base: '66px', md: '74px' }}
            //zIndex='30'
            >
                <Link>
                    <Image
                        src={logo} alt='logo' />
                </Link>
            </Box>
            <Box
                display='flex'
                alignItems='center'
            >
                <Link
                    marginRight='25px'
                    transform={isActive ? 'scale(0)' : 'unset'}
                    transition='all 0.3s ease 0s'
                >
                    <Image src={phone} alt='phone' />
                </Link>
                {/* <Box>
                    Ru
                </Box> */}
                <Box
                    onClick={() => setIsActive((prev) => !prev)}
                    display={{ base: 'block', md: 'none' }}
                    position={{ base: 'relative', md: 'unset' }}
                    height='16px'
                    cursor='pointer'
                    zIndex='30'
                    width='27px'
                >
                    <Box
                        transition='all 0.3s ease 0s'
                        left='0px'
                        position='absolute'
                        width='100%'
                        height='1px'
                        backgroundColor='#000'
                        transform={isActive ? 'rotate(-45deg)' : 'unset'}
                        top={isActive ? 'calc(50% - 1px)' : '0px'}
                    >
                    </Box>
                    <Box
                        transition='all 0.3s ease 0s'
                        top='calc(50% - 1px)'
                        left='0px'
                        position='absolute'
                        width='100%'
                        height='1px'
                        backgroundColor='#000'
                        transform={isActive ? 'scale(0)' : 'unset'}
                    ></Box>
                    <Box
                        transition='all 0.3s ease 0s'
                        left='0px'
                        position='absolute'
                        width='100%'
                        height='1px'
                        backgroundColor='#000'
                        transform={isActive ? 'rotate(45deg)' : 'unset'}
                        bottom={isActive ? 'calc(50% - 1px)' : '0px'}
                        _last={{
                            top: 'auto',
                        }}
                    ></Box>
                </Box>
            </Box>
        </Box>
    )
}

export default LinkBlock;