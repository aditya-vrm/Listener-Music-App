import React from "react";  

function Navbar({data}) {
    return (
        <div className="w-full px-30 py-3  flex justify-between ">
            <div className="flex gap-2 items-center" >
            <img className="w-10 object-fit rounded-full " src="https://plus.unsplash.com/premium_vector-1711987689675-439d95531384?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <h1 className="font-bold text-white">Listener</h1>
            </div>
            <div className="px-4 py-2  bg-violet-600 text-white flex gap-2 rounded-md cursor-pointer"><h1 >Favourites</h1>
                <h1>{data.filter(item=>item.add).length}</h1>
            </div>
        </div>
    )
}

export  default Navbar ;