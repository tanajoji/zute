import './Dashboard.css'
import Dp from "../../assets/steff.jpg"
import React,{useEffect, useState} from 'react';





const Dashboard = () => {
    const [data,setData] = useState(null)

    const GetData = async () => {
        const response = await fetch('https://zute.onrender.com/api/users/userlinks', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'jwt': localStorage.getItem('token')
                },
            })

        const data = await response.json()
        console.log(data)
        console.log(data.firstname)
        if(data!= null){
            setData(data)
        }
        else{
            console.log("error")
        }
    }


    useEffect(()=>{
        GetData()
    },[])



    return(
        ((data !== null) && <>
        <DashData data={data}/>
        </>)
    )
}

const DashData = (props) => {
    return(
        ((props !== null) && <div className='dashboardFrame'>
            <div className='profileSection'>
                <div>
                    <div className='profilePic' style={{backgroundImage: `url(${Dp})`}}>
                    </div>
                </div>
                <div className='profileContents'>
                    <h1 className='userName'>{props.data.firstname} {props.data.lastname}</h1>
                    <div>
                        <p className='userData'>{props.data.phone}</p>
                        <p className='userData'>{props.data.email}</p>
                    </div>
                </div>
            </div>
            <div className='linksSection'>

            </div>
        </div>)
    )
}

export default Dashboard