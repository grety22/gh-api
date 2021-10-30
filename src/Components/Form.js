import axios from 'axios';
import React from 'react';
import TextField from '@mui/material/TextField';

class Form extends React.Component {
    state = {userName: ''};
    handleSubmit = async (event) => {
        event.preventDefault();
        const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
        this.props.onSubmit(resp.data);
        this.setState({ userName: ''});
        console.log(resp.data);
    }
    render (){
        return (
            <form onSubmit={this.handleSubmit}>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <input 
                    type="text" 
                    value = {this.state.userName}
                    onChange = {event => this.setState({ userName: event.target.value })}
                    placeholder="search for github user" 
                    required 
                />
                <button>Add user</button>
            </form>
        )
    }
}

export default Form