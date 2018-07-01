import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Modal from 'react-modal';
import { Profile } from './profile/Profile';
import { Repositories } from './profile/Repositories';
import { getProfileData, getUserRepos, editProfileData } from './services/communication';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputUsername: '',
      searchedRepo: '',
      profile: {},
      repos: [],
      filteredRepos: [],
      modalIsOpen: false
    }
  }
  
  componentDidMount = () => {
    getProfileData()
      .then(data => this.setState({ profile: data }))
      .catch(error => console.error(error));

    getUserRepos()
      .then(data => this.setState({
        repos: data,
        filteredRepos: data
      }))
      .catch(error => console.error(error));

    editProfileData()
  }

  filterSearchedRepo = name => {
    this.setState({ filteredRepos: this.state.repos.filter(repo => repo.name.includes(name)) });
  };

  onChangeName = e => this.setState({ inputUsername: e.target.value });

  onChangeRepo = e => {
    this.setState({ searchedRepo: e.target.value });
    this.filterSearchedRepo(e.target.value);
  };

  openModal() {
    this.setState({modalIsOpen: true});
  }
  
  render() {
    return (
      <div className='App'>
        {window.location.hash === '#/' ? <input onChange={this.onChangeName} value={this.state.inputUsername} placeholder='Enter your GitHub username' />
          : <input onChange={this.onChangeRepo} value={this.state.searchedRepo} placeholder='Search repos' />}
        <Switch>
          <Route exact path='/' render={() => <Profile profileData={this.state.profile} />} />
          <Route path='/repos' render={() => <Repositories reposData={this.state.filteredRepos} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
