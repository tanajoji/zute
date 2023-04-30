import './Dashboard.css'
import Dp from "../../assets/steff.jpg"
import AddNew from "./addNewIcon.svg";
import EditIcon from "./editIcon.svg";
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
                    <div className='nameAndEditButton'>
                        <h1 className='userName'>{props.data.firstname} {props.data.lastname}</h1>
                        <img src={EditIcon} alt="EditIcon" className="editIcon"/>
                    </div>
                    {/* <h1 className='userName'>{props.data.firstname} {props.data.lastname}</h1> */}
                    <div>
                        <p className='userData'>{props.data.phone}</p>
                        <p className='userData'>{props.data.email}</p>
                        {/* <img src={EditIcon} alt="EditIcon" className="editIcon"/> */}
                    </div>
                </div>
            </div>
            <div className='linksSection'>
                <div className='linksContainer'>
                    {
                        props.data.links.map((link, index) => {
                            return (
                                <div className='linkCard'>
                                    {/* <img className='linkImage' src={link.image}/> */}
                                    <p className='linkName'>{link.name}</p>
                                    <a href={link.tag}>Go To Page</a>
                                </div>
                            )
                        })
                    }
                </div>
                <img src={AddNew} alt="AddNewLink" className="addNewIcon"/>
            </div>
        </div>)
    )
}

export default Dashboard