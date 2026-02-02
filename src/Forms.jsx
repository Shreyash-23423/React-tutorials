import { useState } from "react"

export default function Forms() {
  let [fullName, setFullName] = useState("")

  let handlenamechange = (e) => {
    setFullName(e.target.value)
  }
  return (
   <form >
    <label htmlFor="username">Full name</label>
    <input 
      type="text" 
      placeholder="enter your full name" 
      value={fullName}
      onChange={handlenamechange}
      id="username"
      />
    {/* <input type="text" placeholder="enter your full name" value={fullName} onChange={(e) => setFullName(e.target.value)} /> */}
    <button>Submit</button>
   </form>
  )
}