import { Button } from 'bootstrap'
import React from 'react'
import logo from '../Assets/logo.png'
import { LockClosedIcon } from '@heroicons/react/20/solid'

function SignUp() {
	return (
		// <div className='main'>
		// <div class="login-box">
    //     <div class="login-html">
    
    // <div class="login-form">
    //    <div style={{justifyContent:'center', alignContent:'center', display:'flex'}}>
    //    <img src={logo} alt="Logo" style={{width:'150px', height:'150px'}}/>
    //    </div>
    //    <div style={{justifyContent:'center', alignContent:'center', display:'flex'}}>
    //     <h3 style={{color:'white', fontSize:45, fontFamily:'serif', left:'50px'}}>Login</h3>
    //     </div>
    //   <div class="sign-in-htm" >
    //     <div class="group">
         
    //       <input id="user"
    //        type="text" 
    //        className='input'
    //        placeholder='UserName'/>
    //     </div>
        
    //     <input id="user"
    //        type="text" 
    //        className='input'
    //        placeholder='Email'/>
    //     </div>

    //     <input id="user"
    //        type="text" 
    //        className='input'
    //        placeholder='Phone'/>
    //     </div>


    //     <div class="group">
    //       <input id="pass" type="password"
    //        className='input'
    //       placeholder='Password'
    //       data-type="password"/>
    //     </div>
    //     <div class="group" style={{color:'white'}}>
    //       <input id="check" type="checkbox" class="check" checked/>
    //       <label for="check"><span class="icon"></span> Keep me Signed in</label>
    //     </div>
    //     <div class="group">
    //     <button type="submit" style={{width:'190px', height:'50px', borderRadius:'10px', color:'white', backgroundColor:'black'}}>Login</button>
    //     </div>
    //     <div class="hr" style={{margin:'10px'}}></div>
    //     <div class="foot-lnk">
    //       <a href="#forgot" style={{color:'black', textDecoration:'none', textDecorationStyle:'wavy'}}>Forgot Password?</a>
    //     </div>
    //   </div>
     
    //   </div>
    // </div>
    <div className="flex min-h-full items-center something justify-center py-12 px-4 sm:px-6 lg:px-8 h-screen" 
    style={{backgroundImage: "url(https://www.pixelstalk.net/wp-content/uploads/images6/4K-Travel-Wallpaper-for-Desktop.jpg)",backgroundSize:'cover'}}
    >
      <div className="w-full max-w-md space-y-8">
        <div>
          <img
            className="mx-auto h-20 w-auto"
            src={logo}
            alt="Your Company"
          />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign up to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
              start your 14-day free trial
            </a>
          </p>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
          <div>
              <label htmlFor="email-address" className="sr-only">
                Name
              </label>
              <input
                
                name="name"
                type="text"
                autoComplete="name"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Full name"
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Phone number
              </label>
              <input
                
                name="phone"
                type="text"
                autoComplete="phone"
                required
                className="relative block w-full appearance-none rounded-none  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Phone number"
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full appearance-none rounded-none  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative items-center flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
              </span>
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>

	)
}
export default SignUp