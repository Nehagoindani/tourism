import { Button } from 'bootstrap'
import React from 'react'
import logo from '../Assets/logo.png'

function SignUp() {
	return (
		<div className='main'>
		<div class="login-box">
        <div class="login-html">
    
    <div class="login-form">
       <div style={{justifyContent:'center', alignContent:'center', display:'flex'}}>
       <img src={logo} alt="Logo" style={{width:'150px', height:'150px'}}/>
       </div>
       <div style={{justifyContent:'center', alignContent:'center', display:'flex'}}>
        <h3 style={{color:'white', fontSize:45, fontFamily:'serif', left:'50px'}}>Login</h3>
        </div>
      <div class="sign-in-htm" >
        <div class="group">
         
          <input id="user"
           type="text" 
           className='input'
           placeholder='UserName'/>
        </div>
        
        <input id="user"
           type="text" 
           className='input'
           placeholder='Email'/>
        </div>

        <input id="user"
           type="text" 
           className='input'
           placeholder='Phone'/>
        </div>


        <div class="group">
          <input id="pass" type="password"
           className='input'
          placeholder='Password'
          data-type="password"/>
        </div>
        <div class="group" style={{color:'white'}}>
          <input id="check" type="checkbox" class="check" checked/>
          <label for="check"><span class="icon"></span> Keep me Signed in</label>
        </div>
        <div class="group">
        <button type="submit" style={{width:'190px', height:'50px', borderRadius:'10px', color:'white', backgroundColor:'black'}}>Login</button>
        </div>
        <div class="hr" style={{margin:'10px'}}></div>
        <div class="foot-lnk">
          <a href="#forgot" style={{color:'black', textDecoration:'none', textDecorationStyle:'wavy'}}>Forgot Password?</a>
        </div>
      </div>
     
      </div>
    </div>


	)
}
export default SignUp