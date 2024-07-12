import React, {FC} from 'react';
import {IPost} from "../types/IPost";
type IProps = {
    posts: IPost,
}
const UserPostComponent: FC<IProps> = ({posts}) => {
    console.log(posts)
    return (
        <>
            <p><b>{posts.id}</b> - {posts.title}</p>
        </>
    );
};

export default UserPostComponent;