import React from 'react';
function PostDisplay(props) {
  const { post } = props;
  return (
    <div className='certi-posts'>
      <iframe src={`https://myportfolio-ci32.onrender.com/uploads/${post.selectedFile}`}></iframe>
      <p >{post.name}</p>
      <p >{post.issue}</p>
      <a href={post.url} target='_blank'>Link...</a>
      <p >{post.skills}</p>
    </div>
  );
}

export default PostDisplay;