import React, { Children, ReactNode } from 'react';
import { Card as ChakraCard } from '@chakra-ui/react';

interface ICardProps {
    children: ReactNode;
}
const Card = ({ children }: ICardProps) => {
    return <ChakraCard className='rounded-2xl mt-10 mb-10 stroke-black shadow-orange-700'>{children}</ChakraCard>;
};

export default Card;
