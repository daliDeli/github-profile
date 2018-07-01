import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

export const Profile = props => {
    const noData = 'Data is not provided.';
    const defaultImg = 'http://www.hope3k.net/images/placeholders/team-placeholder.jpg';
    const { name, avatarUrl, company, location, bio } = props.profileData;
    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)'
        }
      };  
    const onChangeProfileData = e =>console.warn(e) || props.onChangeProfileData(e);
    return (
        <div>
            <h2>
                Username: {name || noData}
            </h2>
            <img src={avatarUrl || defaultImg} alt='profile' />
            <h3>
                Company: {company || noData}
            </h3>
            <h3>
                Location: {location || noData}
            </h3>
            <h3>
                Bio: {bio || noData}
            </h3>
            <div>
                <button onClick={props.openModal}>Change Profile Data</button>
                <Modal
                    isOpen={props.modalIsOpen}
                    onRequestClose={props.closeModal}
                    style={customStyles} 
                    contentLabel='Modal for Github Data Editing'
                >
                    <h2>Edit Profile Data</h2>
                    <form>
                        Name:<input onChange={onChangeProfileData} name='name' value={props.changedProfile.name} />
                        Company:<input onChange={onChangeProfileData} name='company' value={props.changedProfile.company} />
                        Location:<input onChange={onChangeProfileData} name='location' value={props.changedProfile.location} />
                        Bio:<textarea onChange={onChangeProfileData} name='bio' value={props.changedProfile.bio} rows='5'></textarea>
                        
                    <button type="submit" onClick={props.closeModal}>Finished</button>
                    </form>
                </Modal>
            </div>
            <Link to='/repos'>
                <h4>
                    Repos
                </h4>
            </Link>
        </div>
    )
};