export interface IBlogPost {
    id: string;
    title: string;
    content: string;
    imageUrl?: string;
    videoId?: string;
    videotitle?: string;
}
export interface IBlogPostProps {
    isCard?: boolean;
    data?: IBlogPost;
}

export interface IPostBody {
    data?: IBlogPost;
}
