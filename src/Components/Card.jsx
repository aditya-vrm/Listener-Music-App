import React from "react";

function Card({data, handleclick,index}) {

    const{image , name , artist , add}=data;

    return (
        <div className="w-75 h-40 bg-[#181818] text-white  rounded-md flex relative">
            <div><img className="w-35 object-fit rounded-md px-3 py-3" src={image} alt="" /></div>
            <div className="py-5 text-white"><h1 className="font-bold text-xl">{name}</h1>
                <h1>{artist}</h1>
            </div>
            <button onClick={()=>handleclick(index)} className={`absolute ${add ? "bg-green-400" : "bg-violet-600"} rounded-xl px-4 py-2 bottom-3 right-3 cursor-pointer`}>{add ? "Added" : "Add to Favourite"}</button>
            
        </div>    
    )
}

export default Card;