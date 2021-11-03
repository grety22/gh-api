import axios from 'axios';
import React from 'react';
import styles from "./Form.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

class Form extends React.Component {
    state = {userName: ''};
    handleSubmit = async (event) => {
        event.preventDefault();
        const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
        this.props.onSubmit(resp.data);
        // reset input after submit 
        this.setState({ userName: ''});
        console.log(resp.data);
    }
    render (){
        return (
            <form className={styles.form} onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    className={styles.input}
                    value = {this.state.userName}
                    onChange = {event => this.setState({ userName: event.target.value })}
                    placeholder="search . . . " 
                    required 
                />
                <div className={styles.icon_container_border}>
                    <div className={styles.icon_container}>
                        <FontAwesomeIcon className={styles.icon} icon={faGithub} size="3x"/>
                    </div>
                </div>
            </form>
        )
    }
}

export default Form