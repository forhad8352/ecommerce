import { configureStore } from '@reduxjs/toolkit'
import productSlice from './components/ProductSlice/productSlice'


export const store = configureStore({
                reducer: {
                  product:productSlice
  },
})