import React from 'react'
import ima from '../Images/delete.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function CommentDisplay(props) {
    const {comment}=props;
    const navigate=useNavigate();
    const deletePost=async()=>{
      const pass=prompt("enter password for delete the post");
      if(pass==="chandra143"){
        await axios.delete(`https://myportfolio-ci32.onrender.com/api/memories/delete/${comment._id}`);
        navigate("/");
      }else{
        alert("Only admin can delete the posts");
      }
    }
  return (
    <div className='comment'>
        <div className="comment-1">
          <h2>{comment.name}</h2>
          <p>{comment.des}</p>
        </div>
        <div className="del">
          <img src={ima} width="25px" height="25px" onClick={deletePost}/>
      </div>
    </div>
  )
}

export default CommentDisplay