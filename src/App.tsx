
import './App.css'
import { decrement, increment, incrementByAmount, selectCount } from './store/feature/counterSlice'
import { useAppDispatch, useAppSelector } from './store/hook'

function App() {
const count = useAppSelector(selectCount)
const dispatch = useAppDispatch()
  return (
    <>
    <div>
    <header className="App-header">
        <h1>Counter: {count}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(2))}>Increment by 2</button>
      </header>
    </div>
    </>
  )
}

export default App
