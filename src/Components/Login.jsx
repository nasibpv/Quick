import { useState } from "react";
import { useNavigate } from "react-router"


function Logins(){
    const location =useNavigate()
    const [userName,Setusername]=useState('')
    const[password,setPassword]=useState('')
const handleLogin =async(e)=>{
    e.preventDefault();
    const response = await fetch('/data.json');
    const {users} = await response.json();
    const check=users.find((user)=>user.userid===userName && user.password===password)
    console.log(check);
    if(check){
        location('/')
        alert('login SuccessFully')
    }
    else{
        alert("please chekc userId or Password")
    }
    
    
}

    return(
        <div className=" p-4 w-full h-screen grid justify-center align-center content-center items-center ">
            <div className=" flex gap-5 bg-white p-8 rounded-lg shadow-md  ">
                <div className="w-full">
                    <img src="https://i.postimg.cc/25vP7K41/360-F-248303283-LEJu-ZAKZVSs-M5dn-Mh-USPLIIp0-Bp-B2kf-E.jpg" className="w-full h-full" alt="#" />
                </div>
                <div className="w-full p-5">
            <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
            <form onSubmit={handleLogin}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                    <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-500" value={userName} onChange={(e)=>Setusername(e.target.value)} required />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                    <input type="password" id="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-500" value={password} onChange={(e)=>setPassword(e.target.value)} required />
                </div>
                <div className="flex items-center justify-between mb-6">
                    <label className="inline-flex items-center">
                        <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                        <span className="ml-2 text-gray-700">Remember Me</span>
                    </label>
                    <a className="text-sm text-blue-600 hover:text-blue-800" href="#">Forgot Password?</a>
                </div>
                <button type="submit"  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-500" >
                    Login
                </button>
            </form>
            <p className="mt-6 text-center text-gray-600 text-sm">have an account? <a className="text-blue-600 hover:text-blue-800" href="#">Sign Up</a></p>
                </div>
            </div>
        </div>
    )
}

export default Logins