import { useState } from 'react'
import './Login.css'

const Login = () => {
    const [email, SetEmail] = useState('')
    const [password, SetPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false);

    const LoginUser = async (e) => {
        e.preventDefault();
        
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
                    <p className="title">Login</p>
                </div>
                <form onSubmit={LoginUser}>
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
                    <input type="submit" className="submitButton" value="Continue" />
                </form>
            </div>
            <iframe width="auto" height="315" src="https://www.youtube.com/embed/o7Yof1oaASk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        </>
    )
}

export default Login