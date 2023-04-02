import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PostDisplay from './PostDisplay';
import Navbar from './Navbar';
function Certificates() {
    const navigate=useNavigate();
    const[click,setClick]=useState(false);
    const [posts,setPosts]=useState([]);
    const [name,setName]=useState("");
    const [issue,setIssue]=useState("");
    const [url,setUrl]=useState("");
    const [selectedFile,setSelectedFile]=useState("");
    const [skills,setSkills]=useState([]);
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };
    useEffect(()=>{
        const fetchData=async()=>{
            await axios.get('https://myportfolio-ci32.onrender.com/api/post/certificates').
            then((res)=>setPosts(res.data))
            .catch((err)=>{console.log(err)});
        };
        fetchData();
    },[])
    const handleForm=()=>{
        let password=prompt("Enter the password to add certificate");
        if(password=="chandra143"){
            setClick(true);
        }else{
            alert("You don't have access to add certificate");
            setClick(false);
        }
    }
    const submitHandler=async(e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('issue', issue);
        formData.append('url', url);
        formData.append('selectedFile', selectedFile);
        formData.append('skills', skills);
        try {
            await axios.post('https://myportfolio-ci32.onrender.com/api/post/certificate', formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            });
            setClick(false);
            navigate('/certificates');
        } catch (err) {
            console.log(err);
        }
    }
   
  return (
    <div className='certificates-page'>
        <Navbar/>
        <button onClick={handleForm}>Add Certificate</button>
        <div className="certificate">
            <div className="certificate-post">
                {posts.map((post)=>{
                    return <PostDisplay post={post}/>
                })}
            </div>
            <div className="certi-form">
                {click && <div className="certi">
                    <form onSubmit={submitHandler}>
                        <label>Name</label>
                        <input type="text" placeholder='Certificate Name' onChange={(e)=>{setName(e.target.value)}}/><br/>
                        <label>Organization</label>
                        <input type="text" placeholder='Issue Organization' onChange={(e)=>{setIssue(e.target.value)}}/><br/>
                        <label>URL</label>
                        <input type="text" placeholder="certificate URL"onChange={(e)=>{setUrl(e.target.value)}}/><br/>
                        <label>Image</label>
                        <input type="file"name="selectedFile" onChange={handleFileChange} /><br/>
                        <label>Skills</label>
                        <input type="text" onChange={(e)=>{setSkills(e.target.value.split(','))}}/><br/>
                        <input className="submit"type="submit" value="submit"/>
                    </form>
                </div>}
            </div>
           
        </div>

    </div>
  )
}

export default Certificates;