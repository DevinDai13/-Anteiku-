import React from "react";

class Grid extends React.Component{
    render(){
        return(
            <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-center p-10">
                <div className="flex justify-center text-4xl border-2 border-gray-300 rounded-xl p-6 bg-gray-100">1</div>
                <div className="flex justify-center text-4xl border-2 border-gray-300 rounded-xl p-6 bg-gray-100">2</div>
                <div className="flex justify-center text-4xl border-2 border-gray-300 rounded-xl p-6 bg-gray-100">3</div>
                <div className="flex justify-center text-4xl border-2 border-gray-300 rounded-xl p-6 bg-gray-100">4</div>
                <div className="flex justify-center text-4xl border-2 border-gray-300 rounded-xl p-6 bg-gray-100">5</div>
                <div className="flex justify-center text-4xl border-2 border-gray-300 rounded-xl p-6 bg-gray-100">6</div>
                <div className="flex justify-center text-4xl border-2 border-gray-300 rounded-xl p-6 bg-gray-100">7</div>
                <div className="flex justify-center text-4xl border-2 border-gray-300 rounded-xl p-6 bg-gray-100">8</div>
                <div className="flex justify-center text-4xl border-2 border-gray-300 rounded-xl p-6 bg-gray-100">9</div>
            </div>
        )
    }
}

export default Grid