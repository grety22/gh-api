import React from 'react';

class Card extends React.Component {
    render (){
        return (
          <div className="Card_github-profile">
              <h1>{this.props.login}</h1>
              <img alt="algo" src={this.props.avatar_url}/>
              <a href={this.props.html_url}>{this.props.html_url}</a>
              <p>Member since: {this.props.created_at.substring(0, this.props.created_at.indexOf('T'))}</p>
          </div>
        )
    }
}

export default Card