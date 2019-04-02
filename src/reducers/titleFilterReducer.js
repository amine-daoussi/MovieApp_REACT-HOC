const TitleFilterReducer = (state = '', action) => {
    if(action.type === 'SET_TITLE_SEARCH') {
        return action.title
    }
    return state
}

export default TitleFilterReducer