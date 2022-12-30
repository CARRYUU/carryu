import React from "react";
import { ReactComponent as Errorimg } from "../../icon/404.svg";


const ErrorPage=()=>{
    return(
        <div className="bg-gradient-to-b from-gray-800 to-black align-middle flex justify-center items-center">
            
            <Errorimg className="m-4 flex max-w-2xl  " />

        </div>
    )
}

export default ErrorPage;