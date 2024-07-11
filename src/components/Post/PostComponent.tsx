import React, {FC} from 'react';
import {IPost} from "../../types/IPost";

type IProps = {
    post: IPost,
}
const PostComponent: FC<IProps> = ({post}) => {
    return (
        <>
            <p>UserID: {post.userId}</p>
            <p>ID: {post.id}</p>
            <p>Title: {post.title}</p>
            <p>Body: {post.body}</p>
            <hr/>
        </>
    );
};

export default PostComponent;