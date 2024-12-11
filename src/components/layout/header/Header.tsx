'use client';

import Link from 'next/link';
import React from 'react';
import { Button, Flex, Spacer } from '@chakra-ui/react';
import MenuHam from './Menu';
import { BellRing, Search } from 'lucide-react';

const headerButtons = [
    {
        label: '알림',
        icon: BellRing,
        onclick: () => {
            // '알림';
        },
    },
    {
        label: '검색',
        icon: Search,
        onclick: () => {
            // '검색';
        },
    },
];

const Header = () => {
    return (
        <header className='py-2'>
            <Flex className='container items-center'>
                <h1>
                    <Link href={'/'}>LOGO</Link>
                </h1>
                <Spacer />
                <div>
                    {headerButtons.map(({ label, icon: Icon, onclick }) => (
                        <Button size={'sm'} variant='ghost' className='!ps-2 !pe-2' onClick={onclick}>
                            <span className='sr-only'>{label}</span>
                            <Icon size={18} />
                        </Button>
                    ))}

                    <MenuHam />
                </div>
            </Flex>
        </header>
    );
};

export default Header;
