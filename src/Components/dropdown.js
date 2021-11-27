import React from "react";

class Dropdown extends React.Component{
    state = {
        open: this.props.open
    }
    render(){
        return(
            <div className={this.open ? "grid grid-rows-4 text-center items-center bg-white text-black font-mono":"hidden"} onClick={console.log("clicked")}>
                <button className="p-4" href='#'>Home</button>
                <button className="p-4" href='#'>Menu</button>
                <button className="p-4" href='#'>About</button>
                <button className="p-4" href='#'>Contact</button>
            </div>        
        )
    }
}

export default Dropdown