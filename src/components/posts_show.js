import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchPost, deletePost} from '../actions';

class PostsShow extends Component{

    componentWillMount(){
        const { id } =this.props.match.params;
        this.props.fetchPost(id);
    }

    onDeletePost(){
        const { id } =this.props.match.params;
        this.props.deletePost(id, ()=>{
            this.props.history.push('/');
        })
    }

    render(){
        const {post}= this.props;
        if(!post){
            return <div>Loading...</div>
        }

        return(
            <div>
                <Link to='/'>Back to Index</Link>
                <button className="btn btn-primary pull-xs-right" onClick={this.onDeletePost.bind(this)}>Delete</button> 
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>Content: {post.content}</p>
            </div>
        )
    }
}

function mapStateToProps({posts},x){
    return {post:posts[x.match.params.id]};    
}

export default connect(mapStateToProps, {fetchPost , deletePost })(PostsShow);