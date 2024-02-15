import { configureStore } from "@reduxjs/toolkit";
import quantityReducer from '../features/quantity/QuantitySlice';
import productsReducer from '../features/products/ProductsSlice';
import categoriesReducer from '../features/categories/CategoriesSlice';

export default configureStore({
    reducer: {
        quantity: quantityReducer,
        products: productsReducer,
        categories: categoriesReducer,
    },
});