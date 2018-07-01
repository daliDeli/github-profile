import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Profile } from './profile/Profile';
import { Repositories } from './profile/Repositories';
import { getProfileData, getUserRepos } from './services/communication' ;
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      inputUsername: '',
      searchedRepo: '',
      profile: {},
      repos: []
    }
  }
  // TODO pathname ne radi ali hash bi mogao
  componentDidMount = () =>{
    console.warn('na svaku promenu')
    getProfileData()
      .then(data => this.setState({ profile: data}))
      .catch(error => console.error(error));

    getUserRepos()
      .then(data => this.setState({ repos: data}))
      .catch(error => console.error(error));
  }

  onChange = e => this.setState({ inputUsername: e.target.value});

  render() {
    return (
      <div className='App'>
        {window.location.hash === '#/' ? <input onChange={this.onChange} value={this.state.inputUsername} placeholder='Enter your GitHub username'/>
                                       : <input onChange={this.onChange} value={this.state.searchedRepo} placeholder='Search repos'/>}
        <Switch>
          <Route exact path='/' render={() => <Profile profileData={this.state.profile}/>}/>
          <Route path='/repos' render={() => <Repositories reposData={this.state.repos}/>}/>          
        </Switch>     
      </div>
    );
  }
}

export default App;
