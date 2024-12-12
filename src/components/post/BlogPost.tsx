import React from 'react';
import Card from '../card/Card';
import { Image } from '@chakra-ui/react';

interface IBlogPostProps {
    isCard?: boolean;
}

const BlogPost = ({ isCard }: IBlogPostProps) => {
    const Wrapper = isCard ? Card : 'div';
    // const wrapperClass = isCard ? 'bg-black' : '';
    return (
        <Wrapper>
            {/* post head */}
            <div className='flex flex-col gap-4 rounded-2xl  pb-5 items-center'>
                <Image
                    src='/image/thumb/24.jpg '
                    alt='24'
                    width={300}
                    height={300}
                    className='w-full aspect-video '
                ></Image>
                <strong className='text-xl font-black text-orange-500 line-clamp-1	'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit temporibus minima accusamus in
                    itaque dolore provident odit ipsum soluta culpa at amet eos, optio corporis beatae, porro, iure
                    voluptatem consectetur.
                </strong>

                <p className='italic text-black line-clamp-3	'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus facilis distinctio, autem,
                    repudiandae cum sequi dolorem voluptas illo hic neque error. Sit, mollitia! Praesentium a, molestiae
                    voluptatum provident magni aliquam?
                </p>
            </div>
            {/* post body */}

            {/* post footer */}
        </Wrapper>
    );
};

export default BlogPost;
