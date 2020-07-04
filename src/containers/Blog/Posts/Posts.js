import React, { Component } from "react";
import axios from '../../../axios'
import Post from '../../../components/Post/Post'
import './Posts.css'
import FullPost from '../FullPost/FullPost';
import { Route } from "react-router-dom";

class Posts extends Component {
    state = {
        allPosts: [],
        selectedPostID: null
    }

    SelectPostHandler = (id) => {
        //this.props.setPostId(id);
        //this.setState({selectedPostID : id});
        this.props.history.push({ pathname: '/posts/' + id });
    }

    componentDidMount() {
        axios.get('/posts')
            .then((response) => {
                let allPostsd = response.data.slice(0, 4);
                let updatedPosts = allPostsd.map(post => {
                    return (
                        {
                            ...post,
                            author: "Tomer"
                        }
                    )
                })
                this.setState({ allPosts: updatedPosts });
            })
    }

    render() {
        let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>
        if (!this.state.error) {
            posts = this.state.allPosts.map(post => {
                return (
                    // <Link to={'/' + post.id}  >
                    <Post
                        key={post.id}
                        author={post.author}
                        title={post.title}
                        clicked={() => this.SelectPostHandler(post.id)}>
                    </Post>
                    // </Link>
                )
            })
        }


        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
            </div>
        )
    }
}
export default Posts;