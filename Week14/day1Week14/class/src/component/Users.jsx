import React from "react";


class Users extends React.Component {
    constructor() {
        // console.log('constructor')
        super()
        this.state = {
            users: [],
            search:""
        }
        
    }

    getUsers = () =>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                this.setState({ users: data })
            })
            .catch(error => console.error('Error fetching users:', error));
  };
    componentDidMount = () => {
        // console.log('componentDidMount')
        this.getUsers()
    } 

    componentDidUpdate = () => {
        // console.log('componentDidUpdate')
    } 

    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({search: e.target.value})
    }

    render() {
        // console.log('render')

        const filterUsers = this.state.users.filter(item => {
            return item.name.toLowerCase().includes(this.state.search.toLowerCase())
        })

        return (
            <>
                <div>
                    {/* <button onClick={this.getUsers}> Get Users</button> */}
                    <input
                    onChange={(e) => this.handleChange(e)} 
                    placeholder="Search by Name..."/>
                </div>
                <div>
                    <h2> Users </h2>
                    {
                        filterUsers.map(item => {
                            return (
                                <div key={item.id}>{item.name}</div>
                            )
                        })
                    }
                </div>
            </>
        )
    }
}
export default Users