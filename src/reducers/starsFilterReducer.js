const StarsFilterReducer = (state = 0, action) => {
    if(action.type === 'SET_STARS_FILTER') {
        return action.rating
    }
  else  return state
}

export default StarsFilterReducer;