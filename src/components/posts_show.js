import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';
import { Link } from 'react-router-dom';

class PostsShow extends Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  onDeleteClick() {
    const { id } = this.props.match.params;
    this.props.deletePost(id);
  }

  render() {

    const { post } = this.props

    if (!post) {
      return(<div></div>);
    }

    return(
      <div>
        <Link to='/'>Back</Link>
        <button
         className='btn btn-danger pull-xs-right'
         onClick={this.onDeleteClick.bind(this)}
        >

        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  // the second argument in mapStateToProps is ownProps. It is the props
  // that is going to the component it is being connected to.
  // So now the component will see only the one post and not the big list.
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);
