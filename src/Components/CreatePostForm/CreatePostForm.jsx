import React, { useState } from 'react';

const CreatePostForm = (props) => {
    
    const [name, setName] = useState('');
    const [post, setPost] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newEntry = {
            name: name,
            post: post
        };
        props.addNewPostProperty(newEntry)
    }
    
    return (
        <form onSubmit={handleSubmit} className='form-grid'>
            <div className='form-group'>
                <label>Name</label>
                <br></br>
                <input type='string' className="form-control" style={{width: 250}} value={name} placeholder = "Enter your first and last name" onChange={(event) => setName(event.target.value)}/>
            </div>
            <br></br>
            <div className='form-group'>
                <label>Post</label>
                <br></br>
                <input type='string' className="form-control" style={{width: 250, height: 80}}value={post} placeholder="What's on your mind?" onChange={(event) => setPost(event.target.value)}/>
            </div>
            <button type='submit' className='btn btn-primary' style={{'margin-top': '1em'}}> Post </button>
        </form>
      );
}
 
export default CreatePostForm;