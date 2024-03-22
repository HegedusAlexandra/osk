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
      const filteredProduct = state.filteredProducts.find(
        (product) => product.id === id
      );
      if (product && product.store[size] > 0) {
        product.store[size] -= 1;
        product.quantity[size] += 1 
        filteredProduct.store[size] -= 1;
        filteredProduct.quantity[size] += 1 
      }
    },
    decrementQuantity: (state, action) => {
      const { id, size } = action.payload;
      const product = state.products.find(
        (product) => product.id === id
      );
      const filteredProduct = state.filteredProducts.find(
        (product) => product.id === id
      );
      if (product) {
        product.store[size] += 1;
        product.quantity[size] -= 1 
        filteredProduct.store[size] += 1;
        filteredProduct.quantity[size] -= 1 
      }
    },
    filteredProductsByPriceRange: (state, action) => {
      const [minPrice, maxPrice] = action.payload;
      if (minPrice !== null && maxPrice !== null) {
        state.filteredProducts = [...state.filteredProducts].filter(
          (product) => product.price >= minPrice && product.price <= maxPrice
        );
      }
    },
    filteredProductsByType: (state, action) => {      
      const choosenType = action.payload;
      state.filteredProducts = [...state.filteredProducts].filter(
        (product) => product.type === choosenType
      );
    },
    filteredProductsBySize: (state, action) => {      
      const choosenType = action.payload;
      state.filteredProducts = [...state.filteredProducts].filter(
        (product) => product.store[choosenType] > 0
      );
    },
    sortedProductsByPriceRange: (state, action) => {
      const sortOrder = action.payload;
      state.filteredProducts = [...state.filteredProducts].sort((a, b) => {
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
  filteredProductsBySize,
  filteredProductsByType,
  resetFilter ,
  resetFilteredProducts
} = productSlice.actions;

export default productSlice.reducer;
