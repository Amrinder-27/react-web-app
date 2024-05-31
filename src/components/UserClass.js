import React from "react";
import { GITHUB_URL } from "../Utils/constant";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    // this.state ={
    //     count:0,
    //     count2: 2
    // }
    this.state = {
      userInfo: {
        login: "Amy",
        type: "aus",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch(GITHUB_URL);
    const userJson = await data.json();
    this.setState({
      userInfo: userJson,
    });
  }
  render() {
    const { login, type } = this.state.userInfo;
    // const {count, count2} = this.state;
    console.log("child render");
    return (
      <div className="user-container">
        <h2>Name: {login}</h2>
        <h2>Location: {type}</h2>
        {/* <h2>Count: {count}</h2> */}
        {/* <button onClick={()=>{
                    // we can update state variable directly, we need to use setState function here.

                    this.setState({
                        count: this.state.count + 1
                    })
                }}>Click me</button> */}
        {/* <h2>Count2: {count2}</h2> */}
        {/* <h3>Location: {location}</h3> */}
      </div>
    );
  }
}

export default UserClass;

/**
 * whole lifecycle method works
 * -----Mounting -----
 * contructor loaded
 * render loaded with dummy data
 * <html updated with dummy data >
 * component did mount
 * api calls
 *  set state method will be called
 * -----updating
 * updating the dom with set state values in object (virtual dom) reconcialiation
 * <html updated with set state values >
 * component did update method will be called
 *
 */
