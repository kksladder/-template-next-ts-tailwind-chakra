import React from 'react';
import { Menu as MenuWrap, MenuButton, MenuList, MenuItem, IconButton, Button, Avatar } from '@chakra-ui/react';
import { AddIcon, EditIcon, ExternalLinkIcon, HamburgerIcon, RepeatIcon } from '@chakra-ui/icons';
import { ChevronDownIcon } from 'lucide-react';

const Menu = () => {
    return (
        <MenuWrap>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon size={14} />} variant='ghost'>
                <span className='sr-only'>전체 메뉴</span>
                <Avatar size='sm' name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
            </MenuButton>
            <MenuList>
                <MenuItem>맥도날드</MenuItem>
                <MenuItem>버거킹</MenuItem>
                <MenuItem>쉑쉑버거</MenuItem>
                <MenuItem>파이브가이즈</MenuItem>
                <MenuItem>파파이스</MenuItem>
            </MenuList>
        </MenuWrap>
    );
};

export default Menu;
