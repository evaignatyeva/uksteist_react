import React from 'react'

import {
    Box,
    Text,
    Link
} from '@chakra-ui/react'

const Title = () => {
    return (
        <Box>
            <Text
                as='h1'
                fontSize={{ base: '33px', md: '43px', lg: '54px' }}
                paddingBottom='19px'
                paddingTop={{ base: '50px', md: '0px', lg: '50px' }}
                lineHeight={{ base: '36px', md: '57.6px' }}
            >
                Жилой район&nbsp;в <br /> Виймси
            </Text>
            <Text
                fontSize='16px'
                paddingBottom='30px'
                letterSpacing='0.1 px'
            >
                Одиннадцать приватных участков с собственным лесом
            </Text>
            <Link

            >
                <Text
                    display='inline-block'
                    border='1px solid black'
                    borderRadius='35px'
                    fontSize='18px'
                    padding='25px 40px'
                    lineHeight='16.2px'
                    _hover={{
                        '@media(hover:hover)': {
                            transition: 'all 0.3s ease 0s',
                            color: '#fff',
                            backgroundColor: 'green.150'
                        }
                    }}
                >
                    Участки
                </Text>
            </Link>
        </Box>
    )
}

export default Title;