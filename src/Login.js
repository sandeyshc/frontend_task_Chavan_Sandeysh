// import logoss from './new.jpg';

// import './App.css';
import './Login.css'
import FormParameter from './form-parameter';
import GoogleLogin from 'react-google-login';
import logos from './logo192.png';
import AA from './AA.jpg'
import { GithubLoginButton, GoogleLoginButton } from "react-social-login-buttons";
import GitHubLogin from 'react-github-login';

// import SocialButton from "./SocialButton";
// import { OldSocialLogin as SocialLogin } from "react-social-login";
// import {createButton} from "react-social-login-buttons";

// const config = {
//   text: "Log in with Facebook",
//   icon: "facebook",
//   iconFormat: name => `fa fa-${name}`,
//   style: { background: "#3b5998" },
//   activeStyle: { background: "#293e69" }
// };
// /** My Facebook login button. */
// const MyFacebookLoginButton = createButton(config);

function Login(){
  return(
    // mx-32 my-10 
<div style={{margin:'10% 10%'}}>
<div className="grid grid-flow-col grid-rows-7 grid-cols-2 gap-0">
  <div className="col-span-2 fds">
    <img src={AA} style={{  height: "7vmin",width:"7vmin"}}/>
  </div>
  <div className="row-start-2 col-start-1 col-span-2 fds">
    <b style={{fontSize:"4.5vmin"}}>Acme Corp.</b><br/>
    <div className="mb-8">
    <b>Sign in or <a href="#" style={{color:'#8b4513'}}>create an account</a></b><br/>
    </div>
    <p className="text-gray-10">Sign in with</p>
</div>
{/* <div className="row-start-3 col-start-1 col-span-2 mb-10">
    <b>Sign In or create account</b>
</div> */}
{/* <div className="row-start-3 col-start-1 col-span-2 mb-3"> */}
    {/* <p className="text-gray-10 mb-1">Sign in with</p> */}

{/* </div> */}
{/* <div className="row-start-5 col-start-1 "> */}
{/* <div style={{display:'flex',textAlign:'center'}}> */}
    <div className="row-start-3 col-start-1">
    {/* <GoogleLoginButton onClick={() => alert("Hello")} /> */}
    <GoogleLoginButton onClick={() => alert("Hello")} text="Google" style={{maxWidth:'250px',fontSize:'18px',margin:'5%'}} activeStyle={ {background: "#293e69" }}/>

{/* <GoogleLogin
    // className="my-1 w-60"
    render={renderProps => (
        <button onClick={renderProps.onClick} className="hiop">Google</button>
      )}

                clientId="788786912619-k4tb19vgofvmn97q1vsti1u8fnf8j6pa.apps.googleusercontent.com"
                buttonText="Google" ></GoogleLogin> */}
    {/* <GithubLoginButton className="hiiii" render={renderProps => (
        <button onClick={renderProps.onClick} className="hiop">Google</button>
      )}
 text="Google" icon="google" style={{fontSize:'18px',margin:'5%'}} activeStyle={ {background: "#293e69" }}/> */}

</div>
{/* </div> */}
{/* <div className="row-start-5 col-start-2 " style={{boxSizing:'border-box',display:'inline-block',border:'solid #000',position:'relative'}}> */}
{/* <div className="row-start-5 col-start-2 "> */}
    {/* <img src={logos} style={{height:'30px',width:'30px',display:'inline-block'}}/>
    <GitHubLogin clientId="ac56fad434a3a3c1561e"
    // onSuccess={onSuccess}
    // onFailure={onFailure} 
    style={{background:"None"}}/> */}
        <div className="row-start-3 col-start-2">
<GithubLoginButton className="hiiii" onClick={() => alert("Hello")} text="Github" style={{maxWidth:'250px', fontSize:'18px',margin:'5%'}} activeStyle={ {background: "#293e69" }}/>
{/* </div> */}
{/* <SocialLogin
      provider="facebook"
      appId="YOUR_APP_ID"
    >
      <button>Login with Google</button>
    </SocialLogin> */}
    </div>
 {/* </div> */}
<div className="row-start-4 col-start-1 col-span-2">
    <p className="text-gray-10 hellos" ><span>or continue with</span></p>

</div>
<div className="row-start-5 col-start-1 col-span-2 ">
    <FormParameter placeholder="sandy@gmail.com" label="Email Address" type="text"/>
</div>
<div className="row-start-6 col-start-1 col-span-2 fds">
    <FormParameter placeholder="*******" label="Password" type="password" />
</div>
<div className="row-start-7 col-start-1 col-span-2 fds">
    <div className="fds">
    <input type="checkbox" className="mr-3"/>
    <span>Remember me</span>
    <span style={{float:'right'}}>Forgout Your Password?</span>
    </div>
{/* </div>
<div> */}
{/* className="row-start-8 col-start-1 col-span-2 mb-3 " */}
    <button style={{justifyContent:'center', color:"#ffffff",width:"100%",backgroundColor:'#8b4513',height:"70%",maxWidth:'600px'}}>SignIn</button>
</div>
</div>
</div>
  );
}
export default Login;