import React, { useState } from 'react';

const CreatePostForm = (props) => {
    
    const [name, setName] = useState(0);
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
                <input type='string' className="form-control" value={name} onChange={(event) => setName(event.target.value)}/>
            </div>
            <div className='form-group'>
                <label>Post</label>
                <input type='string' className="form-control" value={post} onChange={(event) => setPost(event.target.value)}/>
            </div>
            <button type='submit' className='btn btn-primary' style={{'margin-top': '1em'}}> Post </button>
        </form>
      );
}
 
export default CreatePostForm;