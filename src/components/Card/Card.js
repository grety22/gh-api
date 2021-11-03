import React from 'react';
import styles from "./Card.module.scss";

class Card extends React.Component {
    render (){
        return (
          <div key={this.props.id} className={styles.card}>
                <img className={styles.avatar} alt="algo" src={this.props.avatar_url}/>
                <div className={styles.card_text}>
                    <h1 className={styles.login} >{this.props.login}</h1>
                    <a className={styles.url} href={this.props.html_url}>{this.props.html_url}</a>
                    <p className={styles.date}>{this.props.created_at.substring(0, this.props.created_at.indexOf('T'))}</p>
                </div>
          </div>
        )
    }
}

export default Card