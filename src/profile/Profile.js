import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,
    Form, Input, Button
} from 'reactstrap';
import { DEFAULT_IMG } from '../utils/constants';

export const Profile = props => {
    const noData = 'Data is not provided.';
    const { name, avatarUrl, company, location, bio } = props.profileData;

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        }
    };

    const onChangeProfileData = e => props.onChangeProfileData(e);

    return (
        <div>
            <Card>
                <CardImg top width="60%" src={avatarUrl || DEFAULT_IMG} alt='profile' />
                <CardBody>
                    <CardTitle>
                        Username: {name || noData}
                    </CardTitle>
                    <CardSubtitle>
                        Company: {company || noData}
                    </CardSubtitle>
                    <CardSubtitle>
                        Location: {location || noData}
                    </CardSubtitle>
                    <CardText>
                        Bio: {bio || noData}
                    </CardText>
                    <Button onClick={props.openModal} >
                        Change Profile Data
                    </Button>
                </CardBody>

                <Link to='/repos'>
                    <Button>
                        Repos
                </Button>
                </Link>
            </Card>
            <div>
                <Modal
                    ariaHideApp={false}
                    isOpen={props.modalIsOpen}
                    onRequestClose={props.closeModal}
                    style={customStyles}
                    contentLabel='Modal for Github Data Editing'
                >
                    <h2>Edit Profile Data</h2>
                    <Form>
                        Name<Input onChange={onChangeProfileData} name='name' value={props.changedProfile.name} />
                        Company<Input onChange={onChangeProfileData} name='company' value={props.changedProfile.company} />
                        Location<Input onChange={onChangeProfileData} name='location' value={props.changedProfile.location} />
                        Bio<Input onChange={onChangeProfileData} name='bio' value={props.changedProfile.bio} rows='2' type="textarea" />

                        <Button onClick={props.closeModal}>Edit Data</Button>
                    </Form>
                </Modal>
            </div>
        </div>
    )
};