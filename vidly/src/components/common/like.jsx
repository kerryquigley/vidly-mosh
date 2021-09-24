import React, { Component } from 'react';

// input: liked: boolean
// output: onClick event
// stateless functional component
const Like = (props) => {

    let classes = "fa fa-heart";
    if (!props.liked) classes += "-o";
       return (<i 
            onClick={props.onClick} 
            className={classes} 
            aria-hidden="true">
            </i>  );    
};

 
export default Like;