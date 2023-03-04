import React from 'react'

function CommentDisplay(props) {
    const {comment}=props;
  return (
    <div className='comment'>
        <h2>{comment.name}</h2>
        <p>{comment.des}</p>
    </div>
  )
}

export default CommentDisplay