
const contextReducer = (state, action) => {
    let transactions;

    switch(action.type){
        case 'DELETE_TRANSACTION':
            transactions = state.filter((transaction) => transaction.id !== action.payload);

            return transactions;
            break;
        case 'ADD_TRANSACTION':
            transactions = [action.payload, ...state];

            return transactions;
            break;
        default :
        return state;
    }

   
};

export default contextReducer;
