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

//**
//*mapStateToProps = UseSelector
// {
// count:state.counterReduce.count
// } props.count will be the state
// this way will not use the useSelector and useDispatch 
//mapDispatchToProps = useDispatch

//the main diference its that we cant use hooks with components
//so its depends on how the code is made, if we works with components we will
//work with react, with this.props but we will get the same result, its just different
//ways to get the same result
