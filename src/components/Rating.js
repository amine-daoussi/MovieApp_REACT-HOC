import React from "react";

const Rating =({count,clickRate=()=>{}})=>{
    let starsArr=[]
    for(let i=0;i<=5;i++){
      if(count>i){
          starsArr.push(<span className="starsClick" onClick={()=>clickRate(i)}>★</span>)
      }
      if(count<i){
        starsArr.push(<span className="starsClick" onClick={()=>clickRate(i)}>☆</span>)
      }
    }
    return (<div>{starsArr}</div>)
}

export default Rating;