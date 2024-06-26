import  { ReactNode } from 'react'
import { useRecoilValue } from 'recoil'
import { userInfo } from '../../recoil/atom/user'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children} : {children:ReactNode}) => {
    
    const info = useRecoilValue(userInfo);
    if(info == null){
        return <Navigate to={'/login'}/>
    }
    return children
}

export default PrivateRoute
