import { useState } from "react"

export default function Forms() {
  let [formData, setformData] = useState({
    fullName: "",
    username: "",
    password: ""
  });

  let handleinputchange = (e) => {
    let fieldname = e.target.name;
    let newvalue = e.target.value;

    setformData((currData) => {
      return {...currData, [fieldname]: newvalue};
    });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    setformData({
      fullName: "",
      username: "",
      password: ""
    });
  }
  return (
   <form onSubmit={handleSubmit}>
     <label htmlFor="fullname">Full name</label>
     <input 
       type="text" 
       placeholder="enter your full name" 
       value={formData.fullName}
       onChange={handleinputchange}
       name="fullName"
       />
       <br />
       <br />
     <label htmlFor="username">Username</label>
     <input 
       type="text" 
       placeholder="enter your username" 
       value={formData.username}
       onChange={handleinputchange}
        name="username"
       />
     <label htmlFor="password">Password</label>
     <input 
       type="text" 
       placeholder="enter your password" 
       value={formData.password}
       onChange={handleinputchange}
        name="password"
       />
     {/* <input type="text" placeholder="enter your full name" value={fullName} onChange={(e) => setFullName(e.target.value)} /> */}
     <br />
     <button>Submit</button>
   </form>
  )
}