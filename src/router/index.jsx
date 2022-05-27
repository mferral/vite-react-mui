import general from '@/router/general'
import Routing from '@/core/routing'

const combineRoutes = [    
    ...general,
]

const Routes = () => {
    return (
        <Routing routes={combineRoutes}/>
    )
}

export default Routes
