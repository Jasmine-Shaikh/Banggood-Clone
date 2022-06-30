// import { SET_PRODUCTS, SET_PRODUCTS_FAILED, SET_PRODUCTS_SUCCESS } from "./Action"


// const initState = {
//     loading: false,
//     product: [
//     ]
// }

// export const reducer = (state = initState, action) => {
//     switch (action.type) {
//         case SET_PRODUCTS:
//             return {
//                 ...state,
//                 loading: true,
//             }
//         case SET_PRODUCTS_SUCCESS:
//             return {
//                 ...state,
//                 loading: false,
//                 product: action.payload,
//             }
//         case SET_PRODUCTS_FAILED:
//             return {
//                 ...state,
//                 loading:false,
//             }
//             default:
//                return  state
//     }
// }