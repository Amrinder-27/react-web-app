import User from './User'
import UserClass from './UserClass';
import React from 'react';

class About extends React.Component{
    constructor(props){
        console.log('parent constructos')
   super(props);
       
    }
    componentDidMount(){
        console.log('parent did mouint')   
    }
    render(){
        console.log('parent render')
        return (
            <div className="w-6/12 mx-auto text-center m-3 p-3">
            <h1 className="text-3xl font-bold">About</h1>
                <div className='p-4 m-4  bg-gray-100 rounded-lgs'>
                <p>This is about page</p>
                {/* <User name ="Amrinder Kaur from australia" /> */}
                <UserClass name ="First" location = "Melbourne, Pakenham"/>
                </div>  
            </div>
           
        )
    }
}


export default About;