import {axiosService} from "./axiosServices";
import {urls} from "../constants/urls";
import {IPost} from "../types/IPost";
import {IRes} from "../types/IRes";


const postsService= {
    getPosts: (): IRes<IPost[]> => axiosService.get(urls.posts),
    getPostsUser: (id: number):IRes<IPost[]> => axiosService.get(urls.byUserId + id)
}

export {
    postsService,
}