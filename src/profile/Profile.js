import React from 'react';
import { Link } from 'react-router-dom';

export const Profile = props => {
    const noData = 'Data is not provided.';
    const defaultImg = 'http://www.hope3k.net/images/placeholders/team-placeholder.jpg';
    const { name, avatarUrl, company, location, bio } = props.profileData;

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
        <button onClick={this.openModal}>Open Modal</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
          <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
          <button onClick={this.closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
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