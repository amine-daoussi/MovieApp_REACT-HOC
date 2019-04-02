import React from "react"
import Rating from "./Rating.js"
import deleteMovie from "../actions/deleteMovieAction"
import {connect} from "react-redux"

const mapStateToProps=(state)=>{
    return{ movieList : state}
     
    }
   
    
function MovieCard ({el}){
    const onDeleteMovies =()=>{
     
        el.deleteMovie()
      
        }
 
    return (<section>
        { <div key={Math.random()} className="movieCard">
             <div className="rating">
                 <Rating count={el.rating}/>  
                               
             </div>
             <div >
                 <img className="poster" alt="movie" src={el.poster}/>
             </div>             
             <span className="title">
               {el.title}
             </span>
             <span className="delete" onClick={onDeleteMovies} >Delete Movie</span> 
        </div>
        }




    </section>
           


    )
}
const ConnectedMovieCard = connect (mapStateToProps,{deleteMovie})(MovieCard)
export default ConnectedMovieCard;