import React from "react";

const Video = () => {
    return (
        <div>
            
           
                <div className="py-4 px-8">
                <video className="w-full max-w-full h-auto " controls>
                <source src={require("../../video/預告.mp4")}></source>    
               
                Your browser does not support the video tag.
                </video>
                </div>
            
            
        </div>
    );
  };
  
  export default Video;