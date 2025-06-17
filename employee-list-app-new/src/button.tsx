import React, { useEffect, useState} from 'react';

export function Button (props: {onClick, title} ){
    return (
        <div >
            <button className = "button" onClick = {props.onClick} > {props.title} </button>
        </div>
    );
}
