import React, { Component } from 'react';
import axios from 'axios';

//GET request
class PostList extends Component {
    constructor(props) {
        super(props);
        this.state={
            posts:[],
            errorMsg:null
        }
    }
    
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            console.log(response.data);
            this.setState({posts:response.data});
        })
        .catch(error=>{
            console.log(error);
            this.setState({errorMsg:'error in fetching data'});
        })
       
    }
    render() {
        const {posts,errorMsg}=this.state;
        return (
            <div>
                List of Posts

                {
                    posts.length? posts.map(post=><div style={{margin:'10px'}} key={post.id}>{post.id}:{post.title}</div>):null
                }

                {
                    errorMsg? <div>{errorMsg}</div>:null
                }
            </div>
        );
    }
}

export default PostList;