import React from 'react';
import './Styles/css/index.min.css';
import CardList from './Components/CardList.js';
import Form from './Components/Form.js';

// const testData = [
//   {
//       "login": "evanphx",
//       "id": 7,
//       "node_id": "MDQ6VXNlcjc=",
//       "avatar_url": "https://avatars.githubusercontent.com/u/7?v=4",
//       "gravatar_id": "",
//       "url": "https://api.github.com/users/evanphx",
//       "html_url": "https://github.com/evanphx",
//       "followers_url": "https://api.github.com/users/evanphx/followers",
//       "following_url": "https://api.github.com/users/evanphx/following{/other_user}",
//       "gists_url": "https://api.github.com/users/evanphx/gists{/gist_id}",
//       "starred_url": "https://api.github.com/users/evanphx/starred{/owner}{/repo}",
//       "subscriptions_url": "https://api.github.com/users/evanphx/subscriptions",
//       "organizations_url": "https://api.github.com/users/evanphx/orgs",
//       "repos_url": "https://api.github.com/users/evanphx/repos",
//       "events_url": "https://api.github.com/users/evanphx/events{/privacy}",
//       "received_events_url": "https://api.github.com/users/evanphx/received_events",
//       "type": "User",
//       "site_admin": false
//   },
//   {
//       "login": "vanpelt",
//       "id": 17,
//       "node_id": "MDQ6VXNlcjE3",
//       "avatar_url": "https://avatars.githubusercontent.com/u/17?v=4",
//       "gravatar_id": "",
//       "url": "https://api.github.com/users/vanpelt",
//       "html_url": "https://github.com/vanpelt",
//       "followers_url": "https://api.github.com/users/vanpelt/followers",
//       "following_url": "https://api.github.com/users/vanpelt/following{/other_user}",
//       "gists_url": "https://api.github.com/users/vanpelt/gists{/gist_id}",
//       "starred_url": "https://api.github.com/users/vanpelt/starred{/owner}{/repo}",
//       "subscriptions_url": "https://api.github.com/users/vanpelt/subscriptions",
//       "organizations_url": "https://api.github.com/users/vanpelt/orgs",
//       "repos_url": "https://api.github.com/users/vanpelt/repos",
//       "events_url": "https://api.github.com/users/vanpelt/events{/privacy}",
//       "received_events_url": "https://api.github.com/users/vanpelt/received_events",
//       "type": "User",
//       "site_admin": false
//   },
//   {
//       "login": "wayneeseguin",
//       "id": 18,
//       "node_id": "MDQ6VXNlcjE4",
//       "avatar_url": "https://avatars.githubusercontent.com/u/18?v=4",
//       "gravatar_id": "",
//       "url": "https://api.github.com/users/wayneeseguin",
//       "html_url": "https://github.com/wayneeseguin",
//       "followers_url": "https://api.github.com/users/wayneeseguin/followers",
//       "following_url": "https://api.github.com/users/wayneeseguin/following{/other_user}",
//       "gists_url": "https://api.github.com/users/wayneeseguin/gists{/gist_id}",
//       "starred_url": "https://api.github.com/users/wayneeseguin/starred{/owner}{/repo}",
//       "subscriptions_url": "https://api.github.com/users/wayneeseguin/subscriptions",
//       "organizations_url": "https://api.github.com/users/wayneeseguin/orgs",
//       "repos_url": "https://api.github.com/users/wayneeseguin/repos",
//       "events_url": "https://api.github.com/users/wayneeseguin/events{/privacy}",
//       "received_events_url": "https://api.github.com/users/wayneeseguin/received_events",
//       "type": "User",
//       "site_admin": false
//   },
//   {
//       "login": "brynary",
//       "id": 19,
//       "node_id": "MDQ6VXNlcjE5",
//       "avatar_url": "https://avatars.githubusercontent.com/u/19?v=4",
//       "gravatar_id": "",
//       "url": "https://api.github.com/users/brynary",
//       "html_url": "https://github.com/brynary",
//       "followers_url": "https://api.github.com/users/brynary/followers",
//       "following_url": "https://api.github.com/users/brynary/following{/other_user}",
//       "gists_url": "https://api.github.com/users/brynary/gists{/gist_id}",
//       "starred_url": "https://api.github.com/users/brynary/starred{/owner}{/repo}",
//       "subscriptions_url": "https://api.github.com/users/brynary/subscriptions",
//       "organizations_url": "https://api.github.com/users/brynary/orgs",
//       "repos_url": "https://api.github.com/users/brynary/repos",
//       "events_url": "https://api.github.com/users/brynary/events{/privacy}",
//       "received_events_url": "https://api.github.com/users/brynary/received_events",
//       "type": "User",
//       "site_admin": false
//   },
// ];
class App extends React.Component {
  // constructor (props){
  //   super(props);
  //   this.state = {
  //     profiles: testData,
  //   };
  // } equal to : 🠗

  state = {
    // profiles: testData,
    profiles: [],
  };

  addNewProfile = (profileData) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData],
    }));
  }

  render (){
    return (
      <div className="App">
        <header className="App-header">
          Github - Cards App
        </header>
        <Form onSubmit={this.addNewProfile}/>
        <CardList profiles={this.state.profiles}/>
      </div>
    )
  }
}

export default App;
