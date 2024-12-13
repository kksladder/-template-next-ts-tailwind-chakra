import { IBlogPost, IPostBody } from '@/types/blog.types';
import { Image } from '@chakra-ui/react';
import React from 'react';
import { YouTubePreview } from './YouTubePreview';

const PostBody = ({ data }: IPostBody) => {
    // 데이터가 없을 때 컴포넌트를 렌더링하지 않도록 처리
    if (!data) return null;

    // 필요한 데이터 구조 분해
    const { title, content, imageUrl, videoId, videotitle } = data;

    console.log(data); // 디버깅: 전달된 데이터 확인

    return (
        <div className='flex flex-col gap-4'>
            {videoId ? (
                <YouTubePreview videoId={videoId} title={videotitle || title} />
            ) : imageUrl ? (
                <Image src={imageUrl} alt={title} width={500} height={500} className='w-full aspect-video' />
            ) : (
                <p>No video or image available</p>
            )}

            <div className='pt-4 pb-8 px-4 flex flex-col gap-2'>
                <strong className='text-xl line-clamp-2'>{title}</strong>
                <p className='opacity-70 line-clamp-3'>{content}</p>
            </div>
        </div>
    );
};

export default PostBody;
