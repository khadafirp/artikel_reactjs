
import { connect } from 'react-redux';
import { setLogin } from 'actions/LoginActions';
import { useState } from 'react';

function Login({ email, password, endpoint, setLogin }){

    var [emailValue, setEmailValue] = useState(null)
    var [passwordValue, setPasswordValue] = useState(null)

    function changeEmail(event){
        setEmailValue(event.target.value)
    }

    function changePassword(event){
        setPasswordValue(event.target.value)
    }

    return (
        <div className="content">
            <div className="login-wrap">
                <div className="login-html">
                <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked /><label htmlFor="tab-1" className="tab">Masuk</label>
                <input id="tab-2" type="radio" name="tab" className="sign-up" /><label htmlFor="tab-2" className="tab">Daftar</label>
                <div className="login-form">
                    <div className="sign-in-htm">
                    <div className="group">
                        <label htmlFor="user" className="label">Username</label>
                        <input id="user" type="text" className="input" onChange={changeEmail}/>
                    </div>
                    <div className="group">
                        <label htmlFor="pass" className="label">Password</label>
                        <input id="pass" type="password" className="input" data-type="password" onChange={changePassword} />
                    </div>
                    <div className="group">
                        <input id="check" type="checkbox" className="check"/>
                        <label htmlFor="check"><span className="icon" />Ingat Saya</label>
                    </div>
                    <div className="group">
                        <input type="submit" className="button" defaultValue="Sign In" onClick={() => setLogin(endpoint, {email: emailValue, password: passwordValue})}/>
                    </div>
                    <div className="hr" />
                    <div className="foot-lnk">
                        <a href="#forgot">Forgot Password?</a>
                    </div>
                    </div>
                    <div className="sign-up-htm">
                    <div className="group">
                        <label htmlFor="user" className="label">Username</label>
                        <input id="userDaftar" type="text" className="input" />
                    </div>
                    <div className="group">
                        <label htmlFor="pass" className="label">Password</label>
                        <input id="passDaftar" type="password" className="input" data-type="password" />
                    </div>
                    <div className="group">
                        <label htmlFor="pass" className="label">Repeat Password</label>
                        <input id="passDaftar" type="password" className="input" data-type="password" />
                    </div>
                    <div className="group">
                        <label htmlFor="pass" className="label">Email Address</label>
                        <input id="emailDaftar" type="text" className="input" />
                    </div>
                    <div className="group">
                        <input type="submit" className="button" defaultValue="Sign Up"/>
                    </div>
                    <div className="hr" />
                    <div className="foot-lnk">
                        <label htmlFor="tab-1">Already Member?
                        </label></div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    email: state.login.email,
    password: state.login.password,
    endpoint: state.login.endpoint
  });
  
  const mapDispatchToProps = {
    setLogin
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Login)