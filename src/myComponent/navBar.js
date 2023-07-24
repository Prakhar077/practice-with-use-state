/*import React from 'react'

export function NavBar(props) {
    return (
        <div>
            <h2>hi i am {props.name}</h2>
        </div>
    )
}*/
import {React, useState, useEffect} from 'react';
let bool = false;
export function NavBar(props) {
    const [state, setstate] = useState(bool);
    let name = props.name;
    let name1 = props.name1;
    useEffect(() => {
        setInterval(() => {
            setstate((v) => v === true ? false : true);
        }, 2000);}, [])
    return (
        <>
        <div className="App">
            {state ? <h1>Name of Coder = {name}</h1> : <h1>Languages = {name1}</h1>}
        </div>
        </>
    );
}