import axios from 'axios';
import Config from '~/config';

let url: string = 'api/auth/user';

const signUp = (data: any) => {
    return axios.post(Config.apiUrl + url + '/sigup', data);
};

const signIn = (data: any) => {
    return axios.post(Config.apiUrl + url + '/sigin', data);
};

const activeAccount = (data: any) => {
    return axios.post(Config.apiUrl + url + '/active', data);
};

const AuthService = {
    signUp,
    signIn,
    activeAccount,
};

export default AuthService;
