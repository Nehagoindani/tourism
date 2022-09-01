import { Button } from 'bootstrap'
import React from 'react'
import logo from '../Assets/logo.png'

function Login() {
	return (
		<div className='main'>
		<div class="login-box">
        <div class="login-html">
    
    <div class="login-form">
       <div style={{justifyContent:'center', alignContent:'center', display:'flex'}}>
       <img src={logo} alt="Logo" style={{width:'180px', height:'180px'}}/>
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
        <div class="foot-lnk" style={{flexDirection:'row', justifyContent:'space-between'}}>
          <a href="#forgot" style={{color:'black', textDecoration:'none', marginRight:'20px' }}>Forgot Password?</a>
		  <a href="/SignUp" style={{color:'black', textDecoration:'none',marginLeft:'20px' }}>Create Account</a>
        </div>
      </div>
     
      </div>
    </div>
</div>
</div>

	)
}
export default Login