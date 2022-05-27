import AdminLayout from '@/layouts/admin'

import Login from '@/pages/login'
import Dashboard from '@/pages/dashboard'
import Users from '@/pages/users'
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
    {   
        path:"/dashboard",
        component:Dashboard,
        auth:false,
        layout: AdminLayout
    },
    {
        path:"/usuarios",
        component:Users,
        auth:false,
        layout: AdminLayout
    },
    
]