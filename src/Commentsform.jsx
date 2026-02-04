import { useState } from "react"

export default function Commentsform() {
let [commentData, setCommentData] = useState({
    username: "",
    remarks: "",
    rating: 5
  });

  let handlecommentchange = (e) => {
    setCommentData((currData) => {
      return {...currData, [e.target.name]: e.target.value};
    });
  };
    
    let handlesubmit = (e) => {
      console.log(commentData);
      e.preventDefault();
      setCommentData({
        username: "",
        remarks: "",
        rating: 5
      });
    }

  return (
    <><div>Commentsform</div>
    <form onSubmit={handlesubmit}>
    <label htmlFor="username">Username</label>
    <input type="text"
    placeholder="enter your username"
    name="username"
    id="username"
    value={commentData.username}
    onChange={handlecommentchange}
  />
    <br />
    <br />
  <label htmlFor="Remark">Remark</label>
    <textarea 
     value={commentData.remarks}
     name="remarks" 
     id="remarks"
     placeholder="enter your remarks"
     onChange={handlecommentchange}></textarea>
     
    
    <br /><br />

<label htmlFor="rating">Rating</label>
    <input type="number"min={1}max={5}
    placeholder="enter your rating"
    value={commentData.rating}
    onChange={handlecommentchange}
    name="rating"
    id="rating"
    />
    <br />
    <br />
    <button>Add comment</button>
    </form>
    </>
  )
};
