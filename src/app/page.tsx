'use client';

import Container from '@/components/layout/Container';
import CustomMenu from '@/components/menu/CustomMenu';
import BlogPost from '@/components/post/BlogPost';
import { Flex, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Spacer } from '@chakra-ui/react';
import { ChevronDownIcon, EllipsisVerticalIcon } from 'lucide-react';
import Link from 'next/link';

const menuItems = [
    { label: '오늘', onClick: () => (window.location.href = '/feed') },
    { label: '이번주', onClick: () => console.log('이번주 clicked') },
    { label: '이번달', onClick: () => console.log('이번달 clicked') },
    { label: '전체', onClick: () => console.log('전체 clicked') },
];

const settingMenuItems = [
    { label: '공지사항', onClick: () => (window.location.href = '/notice') },
    { label: '태그 목록', onClick: () => (window.location.href = '/tag') },
    { label: '서비스 정책', onClick: () => (window.location.href = '/service') },
];
export default function Home() {
    return (
        <Container>
            <Flex>
                <nav>
                    <ul className='flex gap-3'>
                        <li>
                            <Link href='/'>트렌딩</Link>
                        </li>
                        <li>
                            <Link href='/'>최신</Link>
                        </li>
                        <li>
                            <Link href='/'>피드</Link>
                        </li>
                    </ul>
                </nav>
                <Spacer />
                <div className='flex gap-3'>
                    <CustomMenu buttonText='이번주' items={menuItems} />
                    <CustomMenu buttonText={<EllipsisVerticalIcon />} items={settingMenuItems} variant='ghost' />
                </div>
            </Flex>
            <BlogPost isCard />
            <BlogPost />
        </Container>
    );
}
