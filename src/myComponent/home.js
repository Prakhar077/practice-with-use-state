import React from 'react';
import { NavBar2 } from './additions';
import { NavBar } from './navBar';
import { NavBar1 } from './byme';
export const Home = () => {
    let name1="prakhar";
  let name2="CSS,js,HTML";
    return (
        <div>
            <NavBar2/>
      <NavBar name={name1} name1={name2}/>
      <NavBar1/> {/*navbar1 is the name of the fuction in the component - byme*/}       
        </div>
    )
}
