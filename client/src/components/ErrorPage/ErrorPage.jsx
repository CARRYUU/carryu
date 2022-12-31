import React from "react";
import Errorimg from '../../icon/404.svg';

const ErrorPage=()=>{
    return(
        <div className="bg-gradient-to-b from-gray-800 to-black align-middle flex justify-center items-center">
            <img src={Errorimg} className="m-4 flex max-w-2xl" alt="404"/>
        </div>
    )
}

export default ErrorPage;