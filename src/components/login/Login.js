import { useState } from 'react'
import './Login.css'
import Loading from "./Loading.svg";
import ZuteCard from "../../assets/zutecard.png"


const Login = () => {
    const [email, SetEmail] = useState('')
    const [password, SetPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false);
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [isLoading, setIsLoading] = useState(false)

    const [loginOrSignup, setloginOrSignup] = useState(true); // true--> show login, else signup
    const toggleLoginSignup = () => {
        setloginOrSignup( (currentState) => {
            return !currentState;
        })
    }

    const LoginUser = async (e) => {
        e.preventDefault();
        
        setIsLoading(true)
        if(loginOrSignup){
            const response = await fetch('https://zute.onrender.com/api/users/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            })

            const data = await response.json()
            console.log(data.token)

            if (data.token) {
                localStorage.setItem('token', data.token)
                alert('Login successful')
                window.location.href = '/'
            } else {
                alert('Please check your username and password')
            }
        }else{
            const response = await fetch('https://zute.onrender.com/api/users/', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstname,
                    lastname,
                    password,
                    email,
                }),
            })

            const data = await response.json()
            console.log(data.token)

            if (data.token) {
                localStorage.setItem('token', data.token)
                window.location.href = '/'
            } else {
                alert('Please Try Again')
            }
        }

        setIsLoading(false)
    }

    return (
        <>
        <h1 className='header'>ZUTE</h1>
        {/* <video autoPlay muted loop id="myVideo">
            <source src={"https://www.youtube.com/embed/o7Yof1oaASk"} type="video/mp4"/>
        </video> */}
        <div className='vfContainer'>
            <div className="formContainer">
                <div className='titleContainer'>
                    <p className="title">{loginOrSignup ? "Login" : "Sign Up"}</p>
                </div>
                <form onSubmit={LoginUser}>
                    {loginOrSignup ?
                        ""
                    : 
                        <>
                        <input 
                            onChange={(e) => setFirstName(e.target.value)}
                            type="text" 
                            id="firstName" 
                            className="authField" 
                            placeholder="Firstname" 
                            required />
                        <input 
                            onChange={(e) => setLastName(e.target.value)}
                            type="text" 
                            id="lastName" 
                            className="authField" 
                            placeholder="Lastname" 
                            required />
                        </> 
                    }
                    <input 
                        onChange={(e) => SetEmail(e.target.value)}
                        type="email" 
                        className="authField" 
                        placeholder="Email" 
                        required />
                    <input 
                        type={showPassword ? "text" : "password"} 
                        onChange={(e) => SetPassword(e.target.value)}
                        className="authField" placeholder="Password"
                        required />
                    <div className="showPasswordContainer">
                        <input type="checkbox" id="showPwd" onChange={(e) => setShowPassword(e.target.checked)}/>
                        <label htmlFor="showPwd">Show password</label>
                    </div>
                    <button type="submit" className="submitButton">{
                        isLoading ?
                            <img src={Loading} alt="Loading" className="loadingIcon"/>
                        :
                            <p>Continue</p>
                        }                
                    </button>
                </form>
            </div>
            <p>
            {   loginOrSignup ? 
                <>New to ZUTE ? <span className="switchPageLink" onClick={toggleLoginSignup}>Sign up</span></>
                :
                <>Go to  <span className="switchPageLink" onClick={toggleLoginSignup}>Login</span></>
            }
            </p>
            <img className="cardImage" src={ZuteCard} alt="Card Images"></img>
            {/* <iframe width="auto" height="315" src="https://www.youtube.com/embed/o7Yof1oaASk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        </div>
        </>
    )
}

export default Login