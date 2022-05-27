import Joi from 'joi';

export const schemaLogin = Joi.object({
    email: Joi.string().required().label('Este campo es requerido'),
    password: Joi.string().required().label('Este campo es requerido')
})