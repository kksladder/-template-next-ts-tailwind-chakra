import React, { ReactNode } from 'react';
import { Menu as CustomMenu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { ChevronDownIcon } from 'lucide-react';

interface IMenuItem {
    label: string;
    onClick?: () => void;
}

interface IMenuProps {
    buttonText: ReactNode;
    items: IMenuItem[];
    variant?: string;
}

const Menu = ({ buttonText, items, variant = 'solid' }: IMenuProps) => {
    return (
        <CustomMenu>
            <MenuButton
                variant={variant}
                as={Button}
                rightIcon={typeof buttonText === 'string' ? <ChevronDownIcon /> : undefined}
            >
                {buttonText}
            </MenuButton>
            <MenuList>
                {items.map((item, index) => (
                    <MenuItem key={index} onClick={item.onClick || (() => console.log(item.label))}>
                        {item.label}
                    </MenuItem>
                ))}
            </MenuList>
        </CustomMenu>
    );
};

const menuItems = [
    {
        label: '이번주',
        onClick: () => console.log('이번주 clicked'),
    },
    {
        label: '이번달',
        onClick: () => console.log('이번달 clicked'),
    },
    {
        label: '전체',
        onClick: () => console.log('전체 clicked'),
    },
];

export default Menu;

// Example usage
// <CustomMenu buttonText="Select Option" items={menuItems} />
