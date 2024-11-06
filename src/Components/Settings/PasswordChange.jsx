import axios from "axios";
import { useState } from "react";


function PasswordChange(){
    const [currentPwd,setCurrentPwd]=useState('')
    const [newPwd,setNewtPwd]=useState('')
    const [confirmPwd,setConfirmPwd]=useState('')
    const[error,setError]=useState(false)
    console.log(newPwd);
    
    const [open,setOpen]=useState(false)

    const check=async(e)=>{
        e.preventDefault()
            try{
                const response=await axios.post('http://localhost:3004/checkCurrentPassword',{currentPassword:currentPwd})
                    const result= response.data.status
                    console.log(response.data);
                    if(result){
                        setOpen(true)
                    }
                    
            }
            catch(error){
                console.log(error,'error');   
                alert('please check password')
            }
        
        


    }
    const handleChangePassword=async(e)=>{
        e.preventDefault()
    if(newPwd===confirmPwd){
        const response=await axios.post('http://localhost:3004/changePassword',{oldPassword:currentPwd,newPassword:newPwd})
        console.log(response.data);
        if(response.data.status){
            alert(response.data.message)
            window.history.back()
        }
        
    }
    else{
        setError(true)
    }
}
    return(
        <div className="">
            {/* x-auto */}
            <div className="w-full sm:w-1/2 lg:w-1/4 border p-4 rounded">
                    {/* {error && <div className="text-red-500 mb-4">{error}</div>} */}
                    <form >
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm  mb-2" htmlFor="oldpassword">Current Password</label>
                            <input
                                type="password"
                                id="oldpassword"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-500"
                                // value={number}
                                onChange={(e) => setCurrentPwd(e.target.value)}
                                required
                            />
                            {!open?<button onClick={check} className="pt-2">CHECK</button>:<p className="text-green-300">SUCCEESS...</p>}
                        </div>
                        {/* <p>Is veri</p> */}
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="newpassword">New Password</label>
                            <input
                                type="password"
                                id="newpassword"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-500"
                                value={newPwd}
                                onChange={(e) => setNewtPwd(e.target.value)}
                                required
                                disabled={!open}
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmpassword">confirm Password</label>
                            <input
                                type="password"
                                id="confirmpassword"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-500"
                                value={confirmPwd}
                                onChange={(e) => setConfirmPwd(e.target.value)}
                                required
                                disabled={!open}
                            />
                        </div>
                       {error&&<p>Please</p>}
                        <button  onClick={(e)=>handleChangePassword(e)} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-500">
                            OK
                        </button>
                    </form>
                </div>
        </div>
    )
}
export default PasswordChange