
import Joi from 'joi';

export const RegisterMonthSchema = Joi.object({
    name: Joi.string()
        .min(3)
        .max(50)
        .pattern(/^[a-zA-Z\s]+$/)
        .required()
        .messages({
            'string.base': 'O mês deve ser uma string.',
            'string.empty': 'O mês não pode estar vazio.',
            'string.min': 'O mês deve ter pelo menos 3 caracteres.',
            'string.max': 'O mês deve ter no máximo 50 caracteres.',
            'string.pattern.base': 'O mês deve conter apenas letras e espaços.',
            'any.required': 'O campo é obrigatório.',
        }),

    totalFunds: Joi.number()
        .required()
        .messages({
            'any.required': 'O campo é obrigatório.',
        }),
});
