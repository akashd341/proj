import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'

export default function CompleteVech(props) {
    
    const [data,setdata]=useState({vehicle_number: props.val[0].vehicle_number, driver_id: props.val[0].driver_id})
  
  
    
    function handlesubmit(e){
        e.preventDefault();
        console.log(data)
        const updateddata={
            vehicle_number: data.vehicle_number,
            driver_id: data.driver_id
        };
    //  async function put_data(){
    //   const response=await axios.patch(`http://127.0.0.1:8000/api/1/student/${id}`,updateddata);
    //   return response;
    //  }
    //  const dat=put_data();
    //  dat.then((elem)=>{
    //      console.log("hello")
    
    //     });
    console.log(data) 
    props.ck(false)
    
    
    }
    var well={
        boxShadow:"10px 50px 50px #424040",
        border:"2px solid #4c509c"
      }
    
    return (
        <div>
            
            
            {console.log(data)}
            <div className='h-screen flex bg-gray-bg1 '>
            <div className='w-full max-w-md m-auto border-3 mt-0 border-black bg-white rounded-lg py-10 px-16'>
                <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>
                    Update Data 
                </h1>

                <form onSubmit={handlesubmit}>
                    <div>
                        <label htmlFor='email'>Vehicle No</label>
                        <input
                            type='text'
                            className={`w-full p-2 text-primary border-1 border-black rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='email'
                            placeholder='Vehicle number'
                            value={data.vehicle_number} onChange={(e)=>setdata({...data,vehicle_number:e.target.value})}
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>Driver Id</label>
                        <input
                            type='text'
                            className={`w-full p-2 border-1 border-black text-primary rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='password'
                            placeholder='Driver id'
                            value={data.driver_id} onChange={(e)=>setdata({...data,driver_id:e.target.value})}
                        />
                    </div>

                    <div className='flex justify-center items-center mt-3'>
                        {/* <button
                            className={`bg-green py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}
                        >
                            update
                        </button> */}
                        <input className=' py-2 px-4  rounded border-2 border-indigo-500/100 focus:outline-none focus:border-green-dark' type="submit" value="update"/>
                    </div>
                </form>
            </div>
        </div>
            
        </div>
        //     <div>
    
        //     <div className='border-2 border-indigo-600 w-60 ml-60'>
        //     <form onSubmit={handlesubmit}>
        //     <div>
        //     <label for="name">vehicle_no</label><br/>
        //     <input type="text" name="name" value={data.vehicle_number} onChange={(e)=>setdata({...data,vehicle_number:e.target.value})}/><br/>
        //     </div>
        //     <div>
        //     <label for="driver">Driver_id</label><br/>
        //     <input type="text" name="driver" value={data.driver_id} onChange={(e)=>setdata({...data,driver_id:e.target.value})}/><br/>
        //     </div>
            
        //     <div>
        //     <input  type="submit" value="update"/>
        //     </div>
            
            

          
        //     </form>
        //    </div>
        //     </div>


        
     
      
    );
}
