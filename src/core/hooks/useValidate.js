import { useState } from 'react'

export const useValidate = () => {
    const [errors, setErrors] = useState({})
    return {
        isValidate: (data, schema) => {
            setErrors({})
            const { error } = schema.validate(data, { abortEarly: false })    
            console.log(schema.validate(data, { abortEarly: false })    );        
            if (error) {
                const err = error.details.reduce((obj, item) => {
                    return {
                        ...obj,
                        [item['context']['key']]: {
                            message: item.message,
                            error: true
                        }
                    }
                }, {}) 
    //         const errorMap= error.details.map(err => {
    //             return [
    //                 err.context.key,
    //                 {
    //                     helperText: err.context.label,
    //                     error: true
    //                 }
    //             ]                    
    //             }
    //         )
    //         const map = new Map(errorMap);
    //         const objFromMap = Object.fromEntries(map);
    //         console.log(objFromMap);                
                setErrors(err)                
                return false
            }else return true
        }, 
        clearErrors: () => setErrors({}),
        errors
    }
}
