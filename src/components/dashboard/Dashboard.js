import './Dashboard.css'
import Dp from "../../assets/steff.jpg"
import React,{useEffect, useState} from 'react';

const DashData = (props) => {
    return(
        ((props !== null) && <div className='dashboardFrame'>
            <div className='profileSection'>
                <div>
                    <div className='profilePic' style={{backgroundImage: `url(${Dp})`}}>
                    </div>
                </div>
                <div className='profileContents'>
                    <h1 className='userName'>{props.data.firstname}</h1>
                    <div>
                        <p className='userData'>+33 768 15 4455</p>
                        <p className='userData'>st3ffin@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className='linksSection'>

            </div>
        </div>)
    )
}



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
        console.log(data[0])
        console.log(data[0].firstname)
        if(data!= null){
            setData(data[0])
        }
        else{
            console.log("error")
        }
    }


    useEffect(()=>{
        GetData()
        console.log("hello")
    },)


    return(
        <>
        <DashData data={data}/>
        </>
    )
}

export default Dashboard