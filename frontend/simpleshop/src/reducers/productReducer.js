export const SET_PRODUCTS = 'SET_PRODUCTS';
export const SET_PRODUCT_DETAIL = 'SET_PRODUCT_DETAIL';
export const SET_PRODUCTS_VARIANTS = 'SET_PRODUCTS_VARIANTS';

const initialState = {
    products: [],
    productDetail: {},
    productVariants: [],
  };
  
  const productsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_PRODUCTS':
        return {
          ...state,
          products: action.payload,
        };
      case 'SET_PRODUCT_DETAIL':
        return {
          ...state,
          productDetail: action.payload,
        };
      case 'SET_PRODUCT_VARIANTS':
        return {
          ...state,
          productVariants: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default productsReducer;
  