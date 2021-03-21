import React, { Component } from 'react';
import axios from 'axios';

//POST request
class PostForm extends Component {

    constructor(props) {
        super(props);
        this.state={
            userId:'',
            title:'',
            body:''
        }
    }
    
    setValuesHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    submitHandler=(e)=>{

        e.preventDefault();
        console.log(this.state);
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(response=>{
            console.log(response);
        })
        .catch(error=>{
            console.log(error);
        })
    }
    render() {
        const {userId,title,body}=this.state;
        return (
            <div>
                <form method="POST" onSubmit={this.submitHandler}>
                    user id : <input type="text" name="userId" value={userId} onChange={this.setValuesHandler}></input>
                    <br></br>

                    title : <input type="text" name="title" value={title} onChange={this.setValuesHandler}></input>
                    <br></br>

                    body : <input type="text" name="body" value={body} onChange={this.setValuesHandler}></input>
                    <br></br>

                    <button type="submit">submit</button>

                </form>
            </div>
        );
    }
}

export default PostForm;