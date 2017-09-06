import React, {Component} from 'react';

export default class ShowPost extends Component {
  constructor(props){
    super(props);

    this.state = {
      author: '',
      title: '',
      blog: ''
    }
  }

componentDidMount(){
  const { id } = this.props.match.params;
    const URL = `https://tiny-lasagna-server.herokuapp.com/collections/blogger/${id}`;

    fetch(URL).then(response => response.json()).then(data => this.setState({author: data.author, title: data.title, blog: data.blog}))
}

render(){
  return(
    <div className="blog_container">
      <h1 className="blog-author">{this.state.author}</h1>
      <h3 className="blog-title">{this.state.title}</h3>
      <p>{this.state.blog}</p>
    </div>
  )
}
}
