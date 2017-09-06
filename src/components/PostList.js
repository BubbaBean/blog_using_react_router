import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class PostList extends Component{
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger/').then(results => {
      return results.json();
    }).then(data => {
      this.setState({posts: data});
      console.log("state", this.state.posts);
    })
  }

  render() {
    let blogs = this.state.posts.map((post) => {
      return(
        <NavLink to={`/show/${post._id}`} key={post._id}>{post.title}</NavLink>
      )
    })
    return (
      <div className="list_container">
        <h1>The Masterpiece Library</h1> 
        <section className="list-group">
          {blogs}
        </section>
      </div>
    )
  }
}
