const listingsReducer = (state, action) => {
    switch(action.type) {
        case 'POPULATE_LISTINGS':
            return action.listings;
        default:
            return state;
    }
}

export default listingsReducer;