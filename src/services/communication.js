import axios from 'axios';
import { BASE_URL, AUTH_TOKEN } from '../utils/constants';
import User from '../models/User';
import Repo from '../models/Repo';

export const getProfileData = () => {
    return axios.get(`${BASE_URL}users/daliDeli`)
        .then(profileData => new User(profileData.data));
};

export const getUserRepos = () => {
    return axios.get(`${BASE_URL}users/daliDeli/repos`)
        .then(repoData => repoData.data.map(repo => new Repo(repo)));
};

export const editProfileData = () => {
    return axios({
        method: 'PATCH',
        url: `${BASE_URL}user?access_token=${AUTH_TOKEN}`,
        headers: {
            "content-type": "application/json",
        },
        data: "{ \"bio\": \"radi sada\"}"
    });
}
