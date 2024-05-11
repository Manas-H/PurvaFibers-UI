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
      // const { products } = state.products;
      const { cartItems } = state.products.products;
      const productIdToRemove = action.payload;

      console.log("this is remove produc: ", JSON.stringify(cartItems));
      console.log("this is up:", productIdToRemove);

      // Remove the item with the given productId from cartItems
      const updatedCartItems = { ...cartItems };
      delete updatedCartItems[productIdToRemove];

      // const nextCartItems = state.products.filter(
      //   (product) => product._id !== action.payload._id
      // );
      // state.products = nextCartItems;

      toast.error(`${action.payload.title} removed from cart`, {
        position: "top-center",
      });
      // state.quantity -= 1;

      return {
        ...state,
        products: {
          ...state.products,
          products: {
            ...state.products.products,
            cartItems: updatedCartItems,
          },
        },
      };
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
    },
    getTotals(state, action) {
      let Alltotal = 0;
      let Allquantity = 0;

      console.log(JSON.stringify(state.products.products));
      // Check if state.products.products and state.products.products.cartItems are defined
      if (state.products.products && state.products.products.cartItems) {
        Object.values(state.products.products.cartItems).forEach((cartItem) => {
          const { price, qty } = cartItem;
          const itemTotal = price * qty - 200;

          Alltotal += itemTotal;
          Allquantity += qty;
        });
      }

      Alltotal = parseFloat(Alltotal.toFixed(2));

      // Return a new state object with updated quantity and total
      return {
        ...state,
        quantity: Allquantity,
        total: Alltotal,
      };
    },
    setCart(state, action) {
      state.products = action.payload;
      state.distinctItemCount = action.payload.distinctItemCount;
      state.total = action.payload.total;
    },
    clearCart(state, action) {
      return initialState;
    },
  },
});

export const {
  addProduct,
  removeFromCart,
  decreaseCart,
  getTotals,
  clearCart,
} = cartSlice.actions;

// Thunk action to handle asynchronous operations
export const addToCartAsync =
  (product, quantity) => async (dispatch, getState) => {
    const state = getState();
    console.log(JSON.stringify(state.cart.products));
    const itemIndex = Object.values(state.cart.products).findIndex(
      (item) => item._id === product._id
    );
    if (itemIndex >= 0) {
      const updatedProduct = {
        ...product,
        cartQuantity: state.cart.products[itemIndex].cartQuantity + 1,
      };
      dispatch(addProductSuccess(updatedProduct, quantity));
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
          quantity: quantity,
          price: product.esp,
          images: product.images,
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
        dispatch(fetchCartAsync());
        console.log("this is res :", res);
        return res;
      } catch (error) {
        console.error("Error adding product to cart:", error);
        dispatch(addProductFailure(error.message));
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
  const token = localStorage.getItem("token");
  const parsedToken = JSON.parse(token);
  console.log(productId);
  try {
    console.log(productId);
    // Make API call to delete cart item
    await axios.delete(
      `http://localhost:5000/api/cart/deletecartitem/${productId}`,
      { headers: { Authorization: `Bearer ${parsedToken.token}` } }
    );
    // Dispatch action to remove item from Redux store
    dispatch(removeFromCart(productId));
    dispatch(fetchCartAsync());
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

const addProductFailure = (error) => ({
  type: "cart/addProductFailure",
  payload: error,
});

const setCart = (cart) => ({
  type: "cart/setCart",
  payload: cart,
});

export default cartSlice.reducer;
