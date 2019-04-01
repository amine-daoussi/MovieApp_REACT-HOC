import React from "react";
import TitleFilter from "./TitleFilter.js"
import Rating from "./Rating.js";
 


function Header ({TitleFilterChange,val,count,clickRate}){
return (<div className="head">
    <TitleFilter val={val} TitleFilterChange={TitleFilterChange}/>
    <Rating count={count} clickRate={clickRate}/>
    </div>)
}

export default Header;