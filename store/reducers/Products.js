import Products from '../../data/dummy'

const initialState = {
    availableProducts: Products,   
    userProducts: Products
};

export default (state = initialState, action) => {
    return state;
};