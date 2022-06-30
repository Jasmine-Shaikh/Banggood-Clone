
// export const SET_PRODUCTS = "SET_PRODUCTS";
// export const SET_PRODUCTS_SUCCESS = "SET_PRODUCTS_SUCCESS";
// export const SET_PRODUCTS_FAILED = "SET_PRODUCTS_FAILED";
// export const SELECTED_PRODUCT = "SELECTED_PRODUCT";


// export const setProducts = (msg) => {
//     return {
//         type: SET_PRODUCTS,
//         payload: msg,
//     };
// };

// export const setProductsSuccess = (products) => {
//     return {
//         type: SET_PRODUCTS_SUCCESS,
//         payload: products,
//     };
// };
// export const setProductsFailed = (err) => {
//     return {
//         type: SET_PRODUCTS,
//         payload: err,
//     };
// };

// export const selectedProduct = (product) => {
//     return {
//         type: SELECTED_PRODUCT,
//         payload: product,
//     };
// };


// export const getProducts = () => (dispatch) => {
//     dispatch(setProducts("Getting products from db"));
//     fetch("").then().then(res=>{
//         dispatch(setProductsSuccess(res))
//     }).catch(err=>{
//         dispatch(setProductsFailed(err))
//     })
// }