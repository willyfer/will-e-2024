import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

// Aquí puedes importar tus reducers
import skillReducer from './features/SkillSlice'

const store = configureStore({
  reducer: {
    skill: skillReducer
  }
})

// Inferir los tipos de `RootState` y `AppDispatch` basados en el store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// Hooks personalizados para usar dispatch y selector con tipos
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store
