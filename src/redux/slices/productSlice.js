import { createSlice } from '@reduxjs/toolkit';

const initialState= {
    products: [
      { id: 1, name: "abbath's rye ritual", quantity: 0 ,price: 1000},
      { id: 2, name: 'behemoth bites', quantity: 0 ,price: 1492},
      { id: 3, name: 'dolch wheat wonder', quantity: 0 ,price: 1920},
      { id: 4, name: 'mirkwood milk crunch', quantity: 0 ,price: 1301},
      { id: 5, name: 'buckethead buckwheat', quantity: 0 ,price: 1222},
      { id: 6, name: 'crispy kroda crunch', quantity: 0 ,price: 1456},
      { id: 7, name: 'okilly dokilly oatflakes', quantity: 0 ,price: 1566},
      // További termékek...
    ],
  };

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    incrementQuantity: (state, action) => {
      const product = state.products.find(product => product.id === action.payload);
      if (product) {
        product.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const product = state.products.find(product => product.id === action.payload);
      if (product && product.quantity > 0) {
        product.quantity -= 1;
      }
    },
  },
});

export const { incrementQuantity, decrementQuantity } = productSlice.actions;

export default productSlice.reducer;
