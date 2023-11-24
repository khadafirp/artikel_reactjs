
import { connect } from 'react-redux';
import { setLogin, setDaftar } from 'actions/LoginActions';
import { useState } from 'react';

function Login({ endpoint, setLogin, setDaftar }){

    var [emailValue, setEmailValue] = useState(null)
    var [passwordValue, setPasswordValue] = useState(null)
    var [emailDaftar, setEmailDaftar] = useState(null)
    var [passwordDaftar, setPasswordDaftar] = useState(null)
    var [namaLengkap, setNamaLengkap] = useState(null)

    function changeEmail(event){
        setEmailValue(event.target.value)
    }

    function changePassword(event){
        setPasswordValue(event.target.value)
    }

    function changeEmailDaftar(event){
        setEmailDaftar(event.target.value)
    }

    function changePasswordDaftar(event){
        setPasswordDaftar(event.target.value)
    }
    
    function changeNamaLengkap(event){
        setNamaLengkap(event.target.value)
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
                        <label htmlFor="user" className="label">E-Mail</label>
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
                        <input type="submit" className="button" defaultValue="Sign In" onClick={() => setLogin(endpoint + 'masuk', {email: emailValue, password: passwordValue})}/>
                    </div>
                    <div className="hr" />
                    <div className="foot-lnk">
                        <a href="#forgot">Forgot Password?</a>
                    </div>
                    </div>
                    <div className="sign-up-htm">
                    <div className="group">
                        <label htmlFor="namalengkap" className="label">Nama Lengkap</label>
                        <input id="namalengkap" type="text" className="input" onChange={changeNamaLengkap}/>
                    </div>
                    <div className="group">
                        <label htmlFor="user" className="label">E-Mail</label>
                        <input id="userDaftar" type="text" className="input" onChange={changeEmailDaftar}/>
                    </div>
                    <div className="group">
                        <label htmlFor="pass" className="label">Password</label>
                        <input id="passDaftar" type="password" className="input" data-type="password" onChange={changePasswordDaftar}/>
                    </div>
                    <div className="group" style={{marginTop: '32px'}}>
                        <input type="submit" className="button" defaultValue="Sign Up" onClick={() => setDaftar(endpoint + 'daftar', {email: emailDaftar, password: passwordDaftar, nama_lengkap: namaLengkap})}/>
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
    endpoint: state.login.endpoint,
  });
  
  const mapDispatchToProps = {
    setLogin,
    setDaftar
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Login)