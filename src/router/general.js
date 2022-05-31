import Login from '@/pages/login'
import Index from '@/pages'

export default [
    {
        path:"/",
        component:Index,
        auth:false         
    }, 
    {   
        path:"/login",
        component:Login,
        auth:false,        
    },
]