import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Login(props) {
    const navigate = useNavigate();
    const [data,setdata]=useState({email:'',pass:''})
    const [user,setuser]=useState(null)
    const [login,setlogin]=useState(false)
    const [active,setactive]=useState(false)
    function handlesumit(e){
        e.preventDefault();
        if(data.email=='admin' && data.pass=='admin'){
            setlogin(true);
        }
        // async function post_data(){
        //   const response=await axios.post('http://127.0.0.1:8000/api/1/student/login',data);
        //   return response;
        //  }
        //  const dat=post_data();
        //  dat.then((elem)=>{return(
        //   elem.data['status']==200?(setuser(elem.data['payload']),setlogin(true)):(null,setlogin(false),setactive(true))
        //  )}); 
        
        // data.name=='admin'&&data.pass=='admin'?setlogin(true):setlogin(false);
        // setdata({email:'',pass:''});
    }
    useEffect(() => {
      
      login?console.log("goodtogo"):console.log("notgo");
      
      login?navigate('/Home'):navigate('/');
      {
          props.chek(login);
      }
      
}, [login]);
    
    var well={
      boxShadow:"10px 50px 50px #424040",
      border:"2px solid #4c509c"
    }
  return (
<div>

        {/* <h1 className='font-serif underline underline-offset-8 text-white text-center m-4'>Login Form</h1> */}
        <div className='ml-[46%] mt-5'><img src="https://www.clipartmax.com/png/full/290-2908659_login-icon-png-free-user-access-icon.png" alt="Girl in a jacket" width="100" height="100"></img>
    </div>
 
            <div style={well} className='flex rounded-md place-content-center h-60 w-72 mt-6 ml-[38%]'>
            <form onSubmit={handlesumit}>
            <div className='mt-3'>
            <label for="username">Username</label><br/>
            <input className='border-2 border-black' type="text" name="username" value={data.email} onChange={(e)=>setdata({...data,email:e.target.value})}/><br/>
            </div>
            <div className='mt-3'>
            <label for="pass" >password</label><br/>
            <input className='border-2 border-black' type="password" name="pass" value={data.pass} onChange={(e)=>setdata({...data,pass:e.target.value})}/><br/>
            </div>
            
            <div>
            <input className='bg-cyan-500 hover:bg-cyan-400 mt-4 p-1 rounded' type="submit" value="Sign in"/>
            </div>
            
            

          
            </form>
           
            </div> 

</div>


  )
}

export default Login;
