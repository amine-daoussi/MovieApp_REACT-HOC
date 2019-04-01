import React, {Component} from "react";


const LoadHOC  =(FunctionHOC)=>{
    return class LoadHOC extends Component{
        render(){
            return this.props.movieListArr.length===0?<img className="spinner" alt="spinner" src="https://thumbs.gfycat.com/LoneDetailedFairybluebird-max-1mb.gif"/>
            :<FunctionHOC {...this.props}/>
        }
    }
}
export default LoadHOC;