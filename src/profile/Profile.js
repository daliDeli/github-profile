import React from 'react';
import { Link } from 'react-router-dom';

export const Profile = props => {
    const noData = 'Data is not provided.';
    const defaultImg = 'http://www.hope3k.net/images/placeholders/team-placeholder.jpg';
    const { name, avatarUrl, company, location, bio } = props.profileData;
    return(
        <div>
            <h2>
                Username:{name || noData} 
            </h2>
            <img src={avatarUrl || defaultImg} alt='profile'/>
            <h3>
                Company:{company || noData}
            </h3> 
            <h3>
                Location:{location || noData}
            </h3>       
            <h3>
                Bio:{bio || noData}
            </h3>             
                <Link to='/repos'><h4>  Repos </h4></Link>
                       
        </div>
        )
};