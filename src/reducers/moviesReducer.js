
const initialState = [
    {rating:"3",poster:"https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Avatar-Teaser-Poster.jpg/220px-Avatar-Teaser-Poster.jpg",title:"Avatar"},
    {rating:"5",poster:"https://biblioteca.acropolis.org/wp-content/uploads/2015/03/Gladiator.jpg",title:"Gladiator"},
    {rating:"2",poster:"https://images-na.ssl-images-amazon.com/images/I/7151Qmxd3pL._SY679_.jpg",title:"The Mummy"},
    {rating:"3",poster:"https://images-na.ssl-images-amazon.com/images/I/51AdBHBnuQL.jpg",title:"The Purge"},
    {rating:"4",poster:"https://images-na.ssl-images-amazon.com/images/I/51J2bFB4AcL.jpg",title:"Titanic"},
    {rating:"1",poster:"http://cdn.collider.com/wp-content/uploads/the-iron-lady-movie-poster-01.jpg",title:"The iron lady"}
  
  ]


const MoviesReducer = (state = initialState , action) => {
    if(action.type === 'ADD_MOVIE') {
        return state= state.concat(action.payload)
    }else if (action.type === 'DELETE_MOVIE'){
        return state.filter(m => {
            if(m.id === action.id) {
                return false
            }
            return true
        })
    }
    
    else { return state}
}


    export default MoviesReducer;