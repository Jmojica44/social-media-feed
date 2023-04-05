// import React, { useState } from 'react';
import './PostList.css';
import'../../App.js';
// import CustomButton from '../CustomButton/CustomButton';
import React, { useEffect } from "react";


const PostList = (props) => {

    const handleClick = () => {
        props.setColor('#00FF00');
    };

    return ( 
        <table className="table App">
            <thead>
            <tr>
                <th>Name</th>
                <th>Post</th>
            </tr>
            </thead>
            <tbody>
            {props.parentEntries.map((entry, index) => {
            return(
            <tr key={index}>
                <td>{entry.name} </td>
                <td>{entry.post} </td>
                <td>
                    <button style={{BackgroundColor: '#00FF00'}} onClick={handleClick}>Like</button>
                </td>
                <td>
                    <button>Dislike</button>
                </td>
            </tr>
                )
            })}
            </tbody>
      </table>
     );
}
 
export default PostList;