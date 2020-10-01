import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';
import Moment from 'react-moment';
import moment from 'moment';
import {connect} from 'react-redux';
import {addLike,removeLike ,deletePost} from '../../action/post'

const PostItem = ({
  addLike,
  removeLike,
  deletePost,
  auth,post: {_id,text,avatar,name,user,likes,comments,date},
showActions
}) => {
    return (
        <div className="post bg-white p-1 my-1">
        <div>
          <Link  to="/profie">
            <img
              className="round-img"
              src={avatar}
              alt=""
            />
            <h4>{name}</h4>
          </Link>
        </div>
        <div>
          <p className="my-1">
        {text}
          </p>
           <p className="post-date">
               Posted On <Moment format="YYYY/MM/DD">{moment.utc(date)}</Moment> 
          </p>
      {showActions && <>
        <button onClick={e => addLike(_id)} type="button" className="btn btn-light"> 
            <i className="fas fa-thumbs-up"></i>{' '}
            {
                likes.length > 0 && (
<span>{likes.length} </span>
                )
            } 
          </button>
          <button onClick={e => removeLike(_id)} type="button"  className="btn btn-light">
            <i className="fas fa-thumbs-down"></i>
          </button>
          <Link to={`/posts/${_id}`} className="btn btn-primary">
            Discussion {' '} {
                comments.length > 0 && (
<span className='comment-count'>{comments.length} </span>
                )
            } 
          </Link>
          {
              !auth.loading && user === auth.user._id && (
                <button  onClick={e => deletePost(_id)}    type="button"
                className="btn btn-danger"
              >
                <i className="fas fa-times"></i>
              </button>
              )
          }
      </>}

          
         
        </div>
        </div>
    );

}

PostItem.defaultProps = {
  showActions: true
}

PostItem.propTypes = {
    auth:PropTypes.object.isRequired,
    post:PropTypes.object.isRequired,
    addLike:PropTypes.func.isRequired,
    removeLike:PropTypes.func.isRequired,
    deletePost:PropTypes.func.isRequired,
}

 const mapStateToProps = state => ({
     auth: state.auth 
 })

export default connect(mapStateToProps,{addLike,removeLike,deletePost})(PostItem)