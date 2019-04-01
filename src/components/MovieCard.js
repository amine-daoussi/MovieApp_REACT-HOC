import React from "react"
import Rating from "./Rating.js"

function MovieCard ({el}){
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
        </div>
        }




    </section>
           


    )
}

export default MovieCard;