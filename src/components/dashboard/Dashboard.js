import './Dashboard.css'
import Dp from "../../assets/steff.jpg"


const Dashboard = () => {
    return(
        <>
        <div className='dashboardFrame'>
            <div className='profileSection'>
                <div>
                    <div className='profilePic' style={{backgroundImage: `url(${Dp})`}}>
                    </div>
                </div>
                <div className='profileContents'>
                    <h1 className='userName'>Steffin Abraham</h1>
                    <div>
                        <p className='userData'>+33 768 15 4455</p>
                        <p className='userData'>st3ffin@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className='linksSection'>

            </div>
        </div>
        </>
    )
}

export default Dashboard