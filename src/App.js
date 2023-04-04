import React, { useState } from 'react';
import CreatePostForm from './Components/CreatePostForm/CreatePostForm';
import PostList from './Components/PostList/PostList';
import Post from './Components/Post/Post';

function App() {
  
  const [entries, setEntries] = useState([{name: 'Jon', post: 'Coding is hard.'}, {name: 'Megan', post: "Just get good."}])


  function addNewPost(entry){
    let tempEntries = [...entries, entry];
    setEntries(tempEntries);
  }
  
  return (
    <div>
      <div>
        <h3>Name
        </h3>
        <div>
          <div>
          <CreatePostForm addNewPostProperty={addNewPost}/>
          </div>
          <div>
          <PostList parentEntries = {entries}/>
          </div>
        </div> 
      </div>
    </div>
  );
}

export default App;
