import React, { useState, useEffect } from 'react';
import {
    Box
} from '@chakra-ui/react'

import LinkBlock from './components/LinkBlock'
import NavBlock from './components/NavBlock'

function NavBar() {
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        if (isActive) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [isActive])

    const [colorNavbar, setColorNavbar] = useState(false)
    const changeBackground = () => {
        if (window.scrollY >= 40) {
            setColorNavbar(true);
        } else {
            setColorNavbar(false);
        }
    }
    window.addEventListener('scroll', changeBackground);

    return (
        <
            // Box
            // maxWidth='1248px'
            // margin='0 auto'
            >
            <LinkBlock isActive={isActive} setIsActive={setIsActive} colorNavbar={colorNavbar} />
            <NavBlock isActive={isActive} colorNavbar={colorNavbar} />
        </>
    )
}

export default NavBar;