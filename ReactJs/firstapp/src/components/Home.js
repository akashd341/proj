import { Card } from "@material-ui/core";
import { useState } from "react";


const Home = ()=>
{
    const Homestyle ={
        backgroundImage: "url('/Home1.png')",
        height: "100vh",
    }
    
    
    
    return(
        <>

        
        <body className="bg-secondary">
            <Card>
        <div className="container">
            <h1 className="text-center"> Welcome to GPS Tracking System</h1>
            <div style={Homestyle}>
                
                </div>
            
        </div>
       </Card>
        </body>
        </>
    )
}

export default Home;