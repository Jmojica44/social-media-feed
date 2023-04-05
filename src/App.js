import React, { useState } from 'react';
import CreatePostForm from './Components/CreatePostForm/CreatePostForm';
import PostList from './Components/PostList/PostList';
import './App.css';


function App() {
  const [bgColor, setBgColor] = useState("#FFFFFF")
  const [entries, setEntries] = useState([{name: 'Jon', post: 'Coding is hard.'}, {name: 'Megan', post: "Just get good."}])


  function addNewPost(entry){
    let tempEntries = [...entries, entry];
    setEntries(tempEntries);
  }
  
  return (
    <div className='container-fluid'>
      <h3 style={{margin: '1em'}}> Social Media Feed
      </h3>
      <div class='row'>
        <div className='col-sm-6'>
          <div className='border-box'>
          <CreatePostForm addNewPostProperty={addNewPost}/>
          </div>
        </div>
        <div className = 'col-sm-6'>
          <div className='border-box'>
          <PostList parentEntries = {entries}/>
          <customButton setBgColor={setBgColor}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
