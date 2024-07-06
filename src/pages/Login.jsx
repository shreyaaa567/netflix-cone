import React,{ useState} from 'react'
import './Login.css'


const Login = () => {
  const[signState, setSignState]=useState("login");
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  
  return (
      
    
       <div className="login-page">
        
      <div className="login-container">
        <h1>{signState}</h1>
        <form>
          {signState==="login"?<input type="text" placeholder='your name'/>:<></>}
          <input type="email" placeholder="Email or phone number" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">{signState}</button>
          <div className="login-help">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">Need help?</a>
          </div>
        </form>
        <div className="signup-now">
          {signState==="login" ?<p>New to Netflix? <span onClick={()=>{setSignState("Signup")}}>Sign up now</span></p>:
          <p>Already have acc? <span onClick={()=>{setSignState("login")}}>Login Now</span> </p>}
          
        </div>
        
        <div className="captcha-notice">
          <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#">Learn more.</a></p>
        </div>
      </div>
    </div>
    
  )
}

export default Login
