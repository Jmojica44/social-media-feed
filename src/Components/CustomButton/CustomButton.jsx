import React, { useEffect } from "react";

const CustomButton = (props) => {
    useEffect(() => {
        handleClick();
    }, []);
    
const PostList = (props) => {

    const handleClick = () => {
        props.setColor('#00FF00');
    };

}
