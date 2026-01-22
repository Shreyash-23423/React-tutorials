import { useState } from "react"


export default function LikeButton() {
    let [isliked, setIsliked] = useState(false);
    let[clicks,setClicks]=useState(0);
    let toggleLike = () => {
       
     setIsliked(!isliked);
     setClicks(clicks + 1);
    }
    let likedStyle = { color: "red" }
    return (
       <div>
        <p> clicks ={clicks} </p>
        <p onClick={toggleLike}>
            {isliked ? (
                <i className="fa-solid fa-heart" style={likedStyle}></i>
                 ): (
                <i className="fa-regular fa-heart" ></i>
                ) }
                </p>
       </div>
    )
}