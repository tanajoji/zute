import './Login.css'

const Login = () => {
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
                <form >
                    <input 
                        type="email" id="usrEmail" className="authField" placeholder="Email" 
                        required />
                    <input type="password"
                        id="usrPwd" className="authField" placeholder="Password"
                        required />
                    <div className="showPasswordContainer">
                        <input type="checkbox" id="showPwd" />
                        <label htmlFor="showPwd">Show password</label>
                    </div>
                    <input type="submit" className="submitButton" value="Continue" />
                </form>
                <div id="signInDiv"></div>
            </div>
            <iframe width="auto" height="315" src="https://www.youtube.com/embed/o7Yof1oaASk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        </>
    )
}

export default Login