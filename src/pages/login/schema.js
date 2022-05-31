import Joi from 'joi';

export const schemaLogin = Joi.object({
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required()
        .messages({ 
            'string.empty': `Campo Requerido`,
            'string.email': 'Email invalido'
        }),
    password: Joi.string()
        .required()
        .alphanum()
        .min(3)
        .max(10)
        .messages({ 
            'string.empty': `Campo Requerido`,
            'string.min': `El minimo de caracteres es 3`,
        }),
})