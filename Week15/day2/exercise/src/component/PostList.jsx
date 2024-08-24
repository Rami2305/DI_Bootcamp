import React, { Component } from "react";
import dataList from '/src/dataList.json';


class PostList extends Component {
    constructor() {
        super(),
        this.state= {
            posts: [] //initiate with an empty array
        }
    }

    componentDidMount() {
        this.setState({
            posts: dataList
        });
        //when the component its mount,
        //the state is settle with the jsondata
    }

    render() {
        const { posts } = this.state;

        return (
            <div className="post-list">
                 <h1>Hi this is a Title</h1>
                    {posts.map(post => (
                    <div key={post.id} className="post">
                        <h2>{post.title}</h2> 
                        <p>{post.content}</p> 
                    </div>
                ))}
            </div>
        )
    }
}

export default PostList