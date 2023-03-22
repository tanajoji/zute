import { Route, Routes } from "react-router-dom"
import Dashboard from "./components/dashboard/Dashboard"

function MainRoutes() {
    
    return (
        <>
                    {/* <Navbar/> */}
                    <Routes>
                        <Route path='/' element={<Dashboard />} />
                        <Route path="/*" element={<h4 className='error'>Route Not Found</h4>} />
                    </Routes>
        </>
    )
}

export default MainRoutes