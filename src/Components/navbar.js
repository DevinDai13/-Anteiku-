import React from "react";

class Navbar extends React.Component{

    render(){
        return(
            <nav className="flex justify-between items-center h-16 text-black relative shadow font-mono">
                <h1 to='/' className="pl-8">
                    Anteiku
                </h1>
                <div className="px-4 cursor-pointer md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </div>
                <div className="pr-8 md:block hidden" onClick={this.props.handleOpen}>
                    <button className="p-4" href='#'>Home</button>
                    <button className="p-4" href='#'>Menu</button>
                    <button className="p-4" href='#'>About</button>
                    <button className="p-4" href='#'>Contact</button>
                </div>    
            </nav>
    
        )
    }
}

export default Navbar