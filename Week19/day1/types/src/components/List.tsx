import { ReactElement, ReactNode } from "react"

interface ListProps<T> {
    // items: (string | number)[];
    items: T[];
}
// const List = <T,> ({items}: ListProps<T>):ReactElement => {
function List<T> ({items}: ListProps<T>) {

    return (
        <>
        <h2>List of:</h2>
        {
            items.map((item, i) => {
               return <div key={i}>{item as ReactNode}</div>
            })
        }
        </>
    )
}

export default List