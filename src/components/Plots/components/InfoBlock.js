import React from 'react'
import {
    Box,
    Image,
    Text
} from '@chakra-ui/react'

import bgLinkBlock from '../../../img/background/Rectangle 101.png'
import forest from '../../../img/icons/Group 39 (1).svg'
import sea from '../../../img/icons/Море иконка (1).svg'
import air from '../../../img/icons/Воздух иконка (1).svg'
//import second from '../../../img/background/Rectangle 101 (1).png'

function InfoBlock() {
    return (
        <Box
            //display='flex'
            //alignItems='center'
            background={`linear-gradient(180deg, #F8F8F8 0%, rgba(248, 248, 248, 0.8) 18.12%, rgba(248, 248, 248, 0.7) 30.84%, rgba(248, 248, 248, 0) 43.08%, rgba(248, 248, 248, 0) 52.88%), url('${bgLinkBlock}')`}
            minHeight='100vh'
            //height='calc(100vh - 60px)'
            backgroundColor='green.50'
            backgroundPosition='center'
            backgroundRepeat='no-repeat'
            backgroundSize='cover'
        >
            <Box
                maxWidth='1248px'
                margin='0 auto'
            >
                <Box
                    display='flex'
                    justifyContent='space-around'
                    alignItems='flex-end'
                >
                    <Box>
                        <Image src={forest} ></Image>
                        <Text
                            fontSize='24px'
                            lineHeight='28.8px'
                            padding={'25px 0px'}
                        >Лес</Text>
                        <Text
                            fontSize='18px'
                        >Жизнь в окружении леса </Text>
                    </Box>
                    <Box>
                        <Image src={sea} ></Image>
                        <Text
                            fontSize='24px'
                            lineHeight='28.8px'
                            padding={'25px 0px'}
                        >Море</Text>
                        <Text
                            fontSize='18px'
                        >В 311 метрах от дома ваше море</Text>
                    </Box>
                    <Box>
                        <Image src={air} ></Image>
                        <Text
                            fontSize='24px'
                            lineHeight='28.8px'
                            padding={'25px 0px'}
                        >Воздух</Text>
                        <Text
                            fontSize='18px'
                        >Вдыхайте морской и хвойный воздух</Text>
                    </Box>
                </Box>
            </Box>
        </Box >
    )
}

export default InfoBlock;