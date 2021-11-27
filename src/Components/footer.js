import React from "react";

class Footer extends React.Component{
    render(){
        return(
            <div className="flex justify-center items-center h-16 bg-black text-white">
                <p>
                    <React.Fragment>
                        {'© '}
                        {"あんていく "}
                        {new Date().getFullYear()}
                    </React.Fragment>
                </p>
            </div>
        )
    }
}

export default Footer