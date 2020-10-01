import React,{useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import Spinner from '../Layouts/Spinner';
import PostItem from '../posts/PostItem';
import {getPost} from '../../action/post';
import { Link } from 'react-router-dom';
import CommentForm from '../post/CommentForm';
import CommentItem from '../post/CommentItem';


const  Post = ({getPost,post : {post,loading },match }) => {

    useEffect(() => {
        getPost(match.params.id);
    },[getPost])

     return loading || post === null ? <Spinner /> : <>
     <Link to="/posts" className="btn">
         Back To Post 
     </Link>
     <PostItem post={post} showActions ={false } />
     <CommentForm postId={post._id} />
     <div className="comments">
         {post.comments.map((comment =>(
             <CommentItem key={comment._id} comment={comment} postId={post._id}></CommentItem>
         )))}
     </div>
      </>      
}

Post.propTypes = {
getPost: PropTypes.func.isRequired,
post: PropTypes.object.isRequired,

}

const mapStateToPros = state => ({
    post: state.post 
})


export default connect(mapStateToPros,{getPost})(Post)
