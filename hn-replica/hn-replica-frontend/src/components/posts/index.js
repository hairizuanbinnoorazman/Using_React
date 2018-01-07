import React, { Component } from 'react'
import SinglePost from './singlePost'

class Posts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [{
                id: 1,
                title: "Test 1",
                source: "github.com",
                points: 92,
                user: 'rXX99',
                noOfComments: 3,
            },
            {
                id: 2,
                title: "Test 2",
                source: "github.com",
                points: 47,
                user: 'us99',
                noOfComments: 1,
            }]
        }
    }

    render() {
        return(
            <div style={{ width: '100%' }}>
                {this.state.posts.map((post) =>
                    <SinglePost 
                        id={post.id}
                        title={post.title}
                        source={post.source}
                        points={post.points}
                        user={post.user}
                        noOfComments={post.noOfComments}
                    />
                )} 
                
            </div>
        )
    }
}

export default Posts