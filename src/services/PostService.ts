import axios from 'axios';
import Config from '~/config';
let url: string = 'api/post';

const getUserPost = (id: any) => {
    return axios.get(Config.apiUrl + url + `/user/${id}`, { withCredentials: true });
};

const post = (data: any) => {
    return axios.post(Config.apiUrl + url, data, { withCredentials: true });
};

const PostService = {
    getUserPost,
    post,
};

export default PostService;
