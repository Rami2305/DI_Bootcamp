import { memo } from 'react' 

const ToDo = (props) => {
    console.log('ToDo render...')
    return(
        <>
        <h2>To Do:</h2>
        {props.todos.map((item,index)=> {
            return (
                <div key={index}>
                    {index} {item}
                </div>
            )
        })}
        </>
    )
}



export default memo(ToDo)