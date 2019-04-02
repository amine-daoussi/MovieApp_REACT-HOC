const filterStars =(payload)=>{
    return {
        type : 'SET_STARS_FILTER',
        payload
    }
  }
  
  export default filterStars;