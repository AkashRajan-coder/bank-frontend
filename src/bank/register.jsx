import { useContext, useState } from "react"
import axios from 'axios';
import { Button } from "react-bootstrap"
// import UserContext from "./context"
export default function Register(){

    // let users=useContext(UserContext)
    let [name,setName]=useState()
    let [gmail,setGmail]=useState()
    let [pass,setPass]=useState()
    function handleSubmit(e){
        e.preventDefault();
        console.log(name)
        console.log(gmail)
        console.log(pass)
        // users.users.push({name:name,email:gmail,password:pass,amount:1110})
        let item={name:name,email:gmail,password:pass,amount:1000}
        axios.post('https://bank-server-ak5a.onrender.com/create',item)
        
    }
    return(<>
    <div className="page-container">
 


    <form action="" onSubmit={handleSubmit}>
    <h1>Register</h1>
    <label htmlFor="">Name: <input type="text" onChange={(e)=>setName(e.target.value)}/></label><br /><br />
    <label htmlFor="">Gmail: <input type="text"onChange={(e)=>setGmail(e.target.value)} /></label><br /><br />
    <label htmlFor="">Password: <input type="password" onChange={(e)=>setPass(e.target.value)}/></label><br /><br />
    <Button type="submit">submit</Button>
    </form>
    </div>
    
    </>)
}