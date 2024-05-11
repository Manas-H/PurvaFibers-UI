import { authConstants } from "../action/constants";

const initState = {
  token: null,
  user: {
    name: "",
    email: "",
    tel: "",
  },
  authenticate: false,
  authenticating: false,
  loading: false,
  error: null,
  message: "",
};

export default (state = initState, action) => {
  console.log(action);

  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      state = {
        ...state,
        authenticating: true,
      };
      break;
    case authConstants.LOGIN_SUCCESS:
      state = {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        authenticate: true,
        authenticating: false,
      };
      break;
    case authConstants.LOGOUT_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case authConstants.LOGOUT_SUCCESS:
      state = {
        ...initState,
      };
      break;
    case authConstants.LOGOUT_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        loading: false,
      };
      break;
    case authConstants.SIGNUP_REQUEST:
      break;
    case authConstants.SIGNUP_SUCCESS:
      break;
    case authConstants.SIGNUP_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
      };
      break;
  }

  return state;
};

import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";

const initialState = {
  products: [],
  quantity: 0,
  distinctItemCount: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    removeFromCart(state, action) {
      // const nextCartItems = state.products.filter(
      //   (product) => product._id !== action.payload._id
      // );
      // state.products = nextCartItems;
      toast.error(`${action.payload.title} removed from cart`, {
        position: "top-center",
      });
      // state.quantity -= 1;
    },
    decreaseCart(state, action) {
      const itemIndex = state.products.findIndex(
        (product) => product._id === action.payload._id
      );
      if (state.products[itemIndex].cartQuantity > 1) {
        state.products[itemIndex].cartQuantity -= 1;

        toast.info(`Decreased ${action.payload.title} cart quantity`, {
          position: "top-center",
        });
      } else if (state.products[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.products.filter(
          (product) => product._id !== action.payload._id
        );
        state.products = nextCartItems;

        toast.error(`${action.payload.title} removed from cart`, {
          position: "top-center",
        });
      }
      localStorage.setItem("product", JSON.stringify(state.products));
    },
    getTotals(state, action) {
      let Alltotal = 0;
      let Allquantity = 0;

      if (state.products.cartItems) {
        Object.values(state.products.cartItems).forEach((cartItem) => {
          const { esp, qty } = cartItem;
          const itemTotal = esp * qty - 200;

          Alltotal += itemTotal;
          Allquantity += qty;
        });
      }

      Alltotal = parseFloat(Alltotal.toFixed(2));
      state.quantity = Allquantity;
      state.total = Alltotal;
    },
    setCart(state, action) {
      state.products = action.payload;
      state.distinctItemCount = action.payload.distinctItemCount;
      state.total = action.payload.total;
    },
  },
});

export const { addProduct, removeFromCart, decreaseCart, getTotals } =
  cartSlice.actions;

// Thunk action to handle asynchronous operations
export const addToCartAsync = (product) => async (dispatch, getState) => {
  const state = getState();
  const itemIndex = state.cart.products.findIndex(
    (item) => item._id === product._id
  );
  if (itemIndex >= 0) {
    const updatedProduct = {
      ...product,
      cartQuantity: state.cart.products[itemIndex].cartQuantity + 1,
    };
    dispatch(addProductSuccess(updatedProduct));
  } else {
    // const tempProduct = { ...product, cartQuantity: 1 };
    console.log("This is temp :", product);
    const token = localStorage.getItem("token"); // Assuming the token is stored in localStorage
    const parsedToken = JSON.parse(token);
    console.log("p: ", parsedToken.token);
    const userId = parsedToken._id;
    // console.log(userId1);
    const payload = {
      user: userId,
      cartItems: {
        product: product._id,
        quantity: 1,
        price: product.mrp,
        images: product.images[0],
        name: product.name,
      },
    };
    console.log("this is payload: ", payload);
    try {
      console.log("this is payload red: ", payload);
      const res = await axios.post(
        "http://localhost:5000/api/cart/addtocart",
        payload,
        { headers: { Authorization: `Bearer ${parsedToken.token}` } }
      );
      dispatch(addProductSuccess(product));
      console.log("this is res :", res);
      return res;
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  }
};

export const fetchCartAsync = () => async (dispatch, getState) => {
  try {
    const token = localStorage.getItem("token");
    const parsedToken = JSON.parse(token);

    const res = await axios.get("http://localhost:5000/api/cart/getcartitem", {
      headers: { Authorization: `Bearer ${parsedToken.token}` },
    });

    console.log("this is res data: ", res.data);
    // Extract cart items from the response
    const cartItems = res.data.cartItems;

    // Calculate the number of distinct items
    const distinctItemCount = Object.keys(cartItems).length;

    dispatch(setCart({ products: res.data, distinctItemCount }));

    console.log(res.data);
  } catch (error) {
    console.error("Error fetching cart:", error);
  }
};

export const removeFromCartAsync = (productId) => async (dispatch) => {
  try {
    // Make API call to delete cart item
    await axios.delete(
      `http://localhost:5000/api/cart/deletecartitem/${productId}`
    );
    // Dispatch action to remove item from Redux store
    dispatch(removeFromCart(productId));
    // Optionally, you can dispatch other actions here (e.g., fetch updated cart data)
  } catch (error) {
    // Handle error
    console.error("Error removing item from cart:", error);
  }
};

const addProductSuccess = (product) => ({
  type: "cart/addProduct",
  payload: product,
});

const setCart = (cart) => ({
  type: "cart/setCart",
  payload: cart,
});

export default cartSlice.reducer;
