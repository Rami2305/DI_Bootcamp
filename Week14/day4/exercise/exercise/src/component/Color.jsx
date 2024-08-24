import React, { useState, useEffect, Component} from 'react'

// function Color() {
//     const [color,setFavoriteColor] = useState('yellow')
    
    
    
//     useEffect(() => {
//         alert("useEffect reached");
//     }, []);
    

//     return (
//          <div>
//             <h1>My favorite color is {color}</h1>
//             <button onClick={() => setFavoriteColor("blue")}>Change Color</button>
//          </div>
//     );
// }
 
// export default Color;

class Color extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favoriteColor:'red',
            show: true
        }
    }

    // shouldComponentUpdate(nextProps,nextState) {
    //     return true
    //     // return false
    // controls that the component should refresh or no.
    // if respond false, the component will not refresh
    // }

    componentDidMount() {
        setTimeout(() => {
          this.setState({ favoriteColor: 'yellow' });
        }, 2000);
      }
    //change the state after 2 secons to prouve the actualization
    componentDidUpdate(prevProps, prevState) {
    console.log("after update");
    }
    //it execute after the actualization.

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("in getSnapshotBeforeUpdate");
        return null;
    }
 //its launched before de update


    deleteChild = () => {
    this.setState({ show: false });
    };

    render() {
        return (
          <div>
            <h1>My favorite color is {this.state.favoriteColor}</h1>
            <button onClick={() => this.setState({ favoriteColor: 'blue' })}>
              Change Color to Blue
            </button>
             <h1>My favorite color is {this.state.favoriteColor}</h1>
            {this.state.show && <Child />}
            <button onClick={() => this.setState({ show: false })}>
                Unmount Child
            </button>
            <button onClick={this.deleteChild}>Delete Child</button>
          </div>
        );
    }
}

export default Color;


class Child extends Component {
    componentWillUnmount() {
        alert('Component will unmount');
    }
    
    render() {
       return <header>Hello World!</header>
    }
}
