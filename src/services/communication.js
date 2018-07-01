import axios from 'axios';
import { URL } from '../utils/constants';
import User from '../models/User';
import Repo from '../models/Repo';

export const getProfileData = () => {
    return axios.get(`${URL}daliDeli`)
            .then(profileData =>  new User(profileData.data));
};

export const getUserRepos = () => {
    return axios.get(`${URL}daliDeli/repos`)
            .then(repoData => repoData.data.map( repo=> new Repo(repo)));
};

export const editProfileData = () => {
    // return axios.patch("https://api.github.com/user", {bio: 'radi radi'});
    return axios({
        method: 'patch',
        url: "https://api.github.com/user",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Basic base64encode(tamaramarr:ireallydontcaredude)'
        }
    })
            
}