import React from 'react';


export default function BoardTitle(props) {
  return (
    <div className="truncate 
        p-4 bg-blue-700
        font-bold
        text-center 
        text-white  
        text-2xl">
        {props.title}
    </div>
  );
}