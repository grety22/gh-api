import styles from "./Main.module.scss";
import React from 'react';
import Form from '../Form/Form';
import Card from '../Card/Card';

export default class Main extends React.Component {
    render (){
        return (
            <div className={styles.main}>
                <Form onSubmit={this.props.onSubmit}/>
                {this.props.profiles.reverse().map((profile) => <Card {...profile}/> )}
            </div>
        )
    }
}