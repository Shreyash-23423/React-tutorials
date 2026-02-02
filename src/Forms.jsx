import { useState } from "react"

export default function Forms() {
  let [fullName, setFullName] = useState("")

  let handlenamechange = (e) => {
    setFullName(e.target.value)
  }
  return (
   <form >
    <input type="text" placeholder="enter your full name" value={fullName} onChange={handlenamechange} />
    {/* <input type="text" placeholder="enter your full name" value={fullName} onChange={(e) => setFullName(e.target.value)} /> */}
    <button>Submit</button>
   </form>
  )
}