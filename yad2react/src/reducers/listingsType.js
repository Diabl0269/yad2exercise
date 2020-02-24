const listingsTypeReducer = (state, action) => {
    switch(action.type) {
        case 'RENT':
            return 'השכרה'
        case 'ROOMMATES':
            return 'שותפים';
        case 'COMMERCIAL':
            return 'מסחרי';
        default:
            return 'מכירה';
    }
}