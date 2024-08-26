import { useSelector, useDispatch} from 'react-redux'
import { increment, decrement } from '../redux/actions'

const Counter = (props) => {
    const count = useSelector((state)=> state.counterReducer.count)

    const dispatch = useDispatch()
    return(
        <>
        <h2>The Amaziing Redux Counter</h2>
        <button onClick={()=>dispatch(increment())}> + </button>
        Count: {count}
        <button onClick={()=>dispatch(decrement())}> - </button>
        </>
    )
}

export default Counter