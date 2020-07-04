import React, { Component, Suspense } from 'react';
import Post from '../../components/Post/Post';
import FullPost from './FullPost/FullPost';
//import NewPost from '../../containers/Blog/NewPost/NewPost';
import './Blog.css';
import post from '../../components/Post/Post';
import axios from '../../axios'
import Posts from './Posts/Posts'
import AsyncComponent from '../../containers/Blog/hoc/AsyncComponent'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'

const asyncComponent = React.lazy(() => {
    return import('../../containers/Blog/NewPost/NewPost')
})

class Blog extends Component {
    state = {
        postSelectedId: null
    }

    PostSelectedHandler = (id) => {
        this.setState({ postSelectedId: id })
    }

    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to='/posts/' exact>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/new-post" render={() => (
                        <Suspense fallback={<div>Loading...</div>}>
                            <asyncComponent/>
                        </Suspense>
                    )} />
                    <Route path="/posts" component={Posts} />
                    <Redirect from="/" to="/posts"></Redirect>
                </Switch>
            </div>
        );
    }
}

export default Blog;