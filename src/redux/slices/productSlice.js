import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../../utils/initialState";

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    incrementQuantity: (state, action) => {
      const { id, size } = action.payload;
      const product = state.products.find(
        (product) => product.id === id
      );
      if (product) {
        product.store[size] -= 1;
        product.quantity[size] += 1 
      }
    },
    decrementQuantity: (state, action) => {
      const product = state.products.find(
        (product) => product.id === action.payload
      );
      if (product && product.quantity > 0) {
        product.quantity -= 1;
        product.store += 1;
      }
    },
    filteredProductsByPriceRange: (state, action) => {
      const [minPrice, maxPrice] = action.payload;
      if (minPrice !== null && maxPrice !== null) {
        state.filteredProducts = [...state.products].filter(
          (product) => product.price >= minPrice && product.price <= maxPrice
        );
      }
    },
    filteredProductsByType: (state, action) => {
      const choosenType = action.payload;
      state.filteredProducts = [...state.products].filter(
        (product) => product.type === choosenType
      );
    },
    sortedProductsByPriceRange: (state, action) => {
      const sortOrder = action.payload;
      state.filteredProducts = [...state.products].sort((a, b) => {
        if (sortOrder === 'ASC') return a.price - b.price;
        else if (sortOrder === 'DESC') return b.price - a.price;
        return 0;
      });
    },
    resetFilter: () => {
      return initialState;
    },
    resetFilteredProducts: (state) => {
      state.filteredProducts = state.products;
    },
  }
});

export const {
  incrementQuantity,
  decrementQuantity,
  filteredProductsByPriceRange,
  sortedProductsByPriceRange,
  filteredProductsByType,
  resetFilter ,
  resetFilteredProducts
} = productSlice.actions;

export default productSlice.reducer;
