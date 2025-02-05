
import Joi from 'joi';

export const RegisterMonthSchema = Joi.object({
    name: Joi.string()
        .min(3)
        .max(50)
        .pattern(/^[a-zA-Z\s]+$/)
        .required()
        .messages({
            'string.base': 'O nome deve ser uma string.',
            'string.empty': 'O nome não pode estar vazio.',
            'string.min': 'O nome deve ter pelo menos 3 caracteres.',
            'string.max': 'O nome deve ter no máximo 50 caracteres.',
            'string.pattern.base': 'O nome deve conter apenas letras e espaços.',
            'any.required': 'O campo nome é obrigatório.',
        }),

    totalFunds: Joi.number()
        .required()
        .messages({
            'any.required': 'O campo CPF é obrigatório.',
        }),
});
