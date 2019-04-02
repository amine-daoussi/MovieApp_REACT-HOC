const deleteMovie =(payload)=>{
    return {
        type : 'DELETE_MOVIE',
        payload
    }
  }
  
  export default deleteMovie;