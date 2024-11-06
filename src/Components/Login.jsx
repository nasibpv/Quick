// import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Logins() {
    const navigate = useNavigate();
    const [number, setNumber] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
console.log(error);

    // const  {mutate}=useMutation({
    //         mutationFn:async()=>{
    //             try {
    //                 const response = await axios.post('http://localhost:3004/login', {
    //                   username,
    //                   password,
    //                 });
    //                 return response.data;
    //               } catch (error) {
    //                 throw new Error(error.response?.data?.message || 'Login failed');
    //               }
    //         },
    //         onSuccess:()=>{
    //             alert('Login successful!')
    //             navigate('/')
    //         },
    //         onError:(data)=>{
    //             setError(data.message)
    //             alert('Please check UserID or Password')
                
                
    //         }
            
    //     })
    
    
    const handleLogin = async (e) => {
        e.preventDefault();
        setError(''); // Reset any previous error

        try {
            const response = await axios.post('http://localhost:3004/login', { phoneNumber:number, password:password });
            alert(response.data.message)
            navigate('/'); 
        } catch (err) {
            console.error(err);
            setError('Login failed. Please check server or back end .');
        }
    };

    return (
        <div className="p-4 w-full h-screen grid justify-center align-center content-center items-center">
            <div className="flex gap-5 bg-white p-8 rounded-lg shadow-md grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 ">
                <div className="w-full">
                    <img src="https://i.postimg.cc/25vP7K41/360-F-248303283-LEJu-ZAKZVSs-M5dn-Mh-USPLIIp0-Bp-B2kf-E.jpg" className="w-full h-full" alt="Login" />
                </div>
                <div className="w-full p-5">
                    <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
                    {error && <div className="text-red-500 mb-4">{error}</div>}
                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Phone Number</label>
                            <input
                                type="text"
                                id="number"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-500"
                                value={number}
                                onChange={(e) => setNumber(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-500"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="flex items-center justify-between mb-6">
                            <label className="inline-flex items-center">
                                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                                <span className="ml-2 text-gray-700">Remember Me</span>
                            </label>
                            <a className="text-sm text-blue-600 hover:text-blue-800" href="#">Forgot Password?</a>
                        </div>
                        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-500">
                            Login
                        </button>
                    </form>
                    <p className="mt-6 text-center text-gray-600 text-sm">Have an account? <a className="text-blue-600 hover:text-blue-800" href="#">Sign Up</a></p>
                </div>
            </div>
        </div>
    );
}

export default Logins;
