import Routing from '@/core/routing'
import general from '@/router/general'
import admin from '@/router/admin'

const combineRoutes = [    
    ...general,
    ...admin,
]

const Routes = () => {
    return (
        <Routing routes={combineRoutes}/>
    )
}

export default Routes
