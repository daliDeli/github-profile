import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Input, Alert } from 'reactstrap';
import { Profile } from './profile/Profile';
import { Repositories } from './profile/Repositories';
import { getProfileData, getUserRepos, editProfileData } from './services/communication';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchedRepo: '',
      profile: {},
      changedProfile: {
        name: '',
        img: '',
        company: '',
        location: '',
        bio: ''
      },
      repos: [],
      filteredRepos: [],
      modalIsOpen: false,
      isThereError: false
    }
  }

  componentDidMount = () => {
    getProfileData()
      .then(data => this.setState({
        profile: data,
        changedProfile: data
      }))
      .catch(error => this.setState({
        isThereError: true
      }));

    getUserRepos()
      .then(data => this.setState({
        repos: data,
        filteredRepos: data
      }))
      .catch(error => this.setState({
        isThereError: true
      }));

  }

  filterSearchedRepo = name => {
    this.setState({ filteredRepos: this.state.repos.filter(repo => repo.name.includes(name)) });
  };

  onChangeProfileData = e => this.setState({
    changedProfile: {
      ...this.state.changedProfile,
      [e.target.name]: e.target.value
    }
  });

  onChangeRepo = e => {
    this.setState({ searchedRepo: e.target.value });
    this.filterSearchedRepo(e.target.value);
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  }

  closeModal = (e) => {
    this.setState({ modalIsOpen: false });
    editProfileData(this.state.changedProfile);
  }

  render() {

    return (
      <div className='App'>
        {this.state.isThereError && <Alert color="danger">There's been an error, please reload the page.</Alert>}
        {window.location.hash === '#/repos' && <Input onChange={this.onChangeRepo} value={this.state.searchedRepo} placeholder='Search user repos...' />}
        <Switch>
          <Route exact path='/' render={() => <Profile changedProfile={this.state.changedProfile} onChangeProfileData={this.onChangeProfileData} modalIsOpen={this.state.modalIsOpen} closeModal={this.closeModal} openModal={this.openModal} profileData={this.state.profile} />} />
          <Route path='/repos' render={() => <Repositories reposData={this.state.filteredRepos} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
