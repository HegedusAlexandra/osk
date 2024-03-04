import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../../utils/initialState';

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    incrementQuantity: (state, action) => {
      const product = state.products.find(product => product.id === action.payload);
      if (product && product.store > 0) {
        product.quantity += 1;
        product.store -= 1
      }
    },
    decrementQuantity: (state, action) => {
      const product = state.products.find(product => product.id === action.payload);
      if (product && product.quantity > 0 ) {
        product.quantity -= 1;
        product.store += 1
      }
    },
  },
});

export const { incrementQuantity, decrementQuantity } = productSlice.actions;

export default productSlice.reducer;
