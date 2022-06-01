import Joi from 'joi';

export const schema = Joi.object({
    titulo: Joi.string()
        .required()
        .messages({ 
            'string.empty': `Campo Requerido`,
        }),
    descripcion: Joi.string()
        .required()
        .messages({ 
            'string.empty': `Campo Requerido`,
        }),
    precio: Joi.number()
        .required()
        .positive()
        .precision(2)        
        .messages({ 
            'number.base': `Campo invalido`,
            'number.positive': `Campo no es positivo `,
        }),
})