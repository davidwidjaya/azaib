import { configureStore } from '@reduxjs/toolkit'
import { CounterSlice } from './slices/counterSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: CounterSlice.reducer
    },
    devTools: process.env.NODE_ENV !== 'production',
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']