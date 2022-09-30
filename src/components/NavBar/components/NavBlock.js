import React, { useEffect } from 'react'

import {
    Box,
    Text,
    Link
} from '@chakra-ui/react'

import LinkIconBurger from './components/LinkIconBurger'

function NavBlock({ isActive, colorNavbar }) {
    //const { currentLanguage } = useContext(LanguageContext)
    const nav = ['Участки', 'Место', 'История', 'Этапы', 'Команда', 'Документы', 'Прогулка']

    return (
        <Box
            // position='fixed'
            marginTop='15px'
            position='sticky'
            width='100%'
            top='0'
            backgroundColor={colorNavbar ? 'rgba(250, 250, 250, 0.9)' : 'none'}
            // top={colorNavbar ? '1' : '100'}
            transition='all 0.3s ease 0s'
        >
            <Box
                as='nav'
                //margin='0 auto'
                //maxWidth='1248px'
                borderTop={{ base: 'unset', md: '1px solid #858685' }}
                borderBottom={{ base: 'unset', md: '1px solid #858685' }}
                padding='20px 0px'
                zIndex='50'
                __css={{
                    "@media (max-width: 768px)": {
                        position: 'fixed',
                        width: '100%',
                        height: '100%',
                        overflow: 'auto',
                        left: '0',
                        backgroundColor: 'gray.50',
                        transition: 'top 0.3s ease 0s',
                        padding: '110px 31px 0px'
                    }
                }}
                top={isActive ? 0 : '-100%'}
            >
                <Box
                    display={{ base: 'block', md: 'flex' }}
                    justifyContent='space-between'
                    width={{ base: '100%', md: '85%', lg: '65%' }}
                    margin='0 auto'
                    paddingTop={{ base: '15px', md: '0px' }}
                >
                    {nav.map((name, index) =>
                        <Text
                            cursor='pointer'
                            paddingBottom={{ base: '16px', md: 'unset' }}
                            _last={{
                                paddingBottom: { base: '62px', md: 'unset' }
                            }}
                            fontWeight='400'
                            fontSize='14px'
                            _hover={{
                                '@media(hover:hover)': {
                                    transition: 'all 0.3s ease 0s',
                                    color: 'green.150',
                                    boxShadow: '0 1px #314C51',
                                }
                            }}
                        >
                            {name}
                        </Text>
                    )}
                </Box>
                <Box
                    display={{ base: 'flex', md: 'none' }}
                    flexDirection='column'
                >
                    <LinkIconBurger />
                    <Text
                        fontWeight='600'
                        fontSize='10px'
                        paddingBottom='8px'
                    >
                        Ваш персональный помощник в покупке участка:
                    </Text>
                    <Text
                        fontSize='10px'
                    >
                        Svetlana Davidovski <br />
                        <Link href='tel:+372 5813 0166'>+372 5813 0166</Link>
                    </Text>
                </Box>
            </Box>
        </Box>
    )
}

export default NavBlock;