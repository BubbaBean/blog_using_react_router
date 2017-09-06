import React, {Component} from 'react';

class CreatePost extends Component {
  constructor(props) {
    super(props);

    this.handleAuthor = this.handleAuthor.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleBlog = this.handleBlog.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      author: " ",
      title: " ",
      blog: ''
    }
  }

  handleAuthor(e) {
    this.setState({author: e.target.value});
  }

  handleTitle(e) {
    this.setState({title: e.target.value})
  }

  handleBlog(e) {
    this.setState({blog: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let listItem = JSON.stringify(this.state);

    fetch("https://tiny-lasagna-server.herokuapp.com/collections/blogger/", {
      method: "POST",
      body: listItem,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => {
      console.log(response, 'yay!');

    }).catch(err => {
      console.log(err, "Bummer!");
    });
    this.setState({author: '', title: '', blog: ''});
  }

  render() {
    return (
        <form className="post_form">

          <div className="group group1">
            <label htmlFor="author">Author: </label>
              <input type="text" name="author" onChange={this.handleAuthor} value={this.state.author} className="blog_author" placeholder="Author Name"/>
            </div>


          <div className="group group2">
            <label htmlFor="title">Title: </label>
              <input type="text" name="title" onChange={this.handleTitle} value={this.state.title} className="blog_title" placeholder="Name Your Masterpiece"/>
            </div>


          <div className="group3">
              <label htmlFor="blog">Write Your Blog:
              </label>
              <input type="textarea" name="blog" value={this.state.blog} className="blogText" placeholder="Write Your Blog Here" onChange={this.handleBlog}/>
            </div>

          <div className="btn_container">
            <button type="submit" className="btn" href="/">
              Submit
            </button>
          </div>
        </form>
    );
  }
}

export default CreatePost;
