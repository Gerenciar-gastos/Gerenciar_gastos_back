import Joi from "joi";

const entrySchema = Joi.object({
    id: Joi.number().required(),
    name: Joi.string().min(2).required().messages({
        "string.empty": "O campo 'name' não pode estar vazio",
        "string.min": "O campo 'name' precisa ter pelo menos 2 caracteres",
    }),
    person: Joi.string().valid(
        "Monique", "Lauro", "Sheure", "Senira", "Patrick", "Gerson",
        "Juliele", "Lucimar"
    ).required().messages({
        "any.only": "O campo 'person' deve ser um dos nomes válidos",
    }),
    value: Joi.number().positive().required().messages({
        "number.base": "O campo 'value' deve ser um número",
        "number.positive": "O campo 'value' deve ser um número positivo",
    }),
});

const containerSchema = Joi.object({
    id: Joi.number().required(),
    nameCard: Joi.string().min(3).required().messages({
        "string.empty": "O campo 'nameCard' não pode estar vazio",
        "string.min": "O campo 'nameCard' precisa ter pelo menos 3 caracteres",
    }),
    entries: Joi.array().items(entrySchema).min(1).required().messages({
        "array.min": "Cada container deve ter pelo menos uma entrada",
    }),
});

export const validatePurchases = Joi.array().items(containerSchema).min(1).required();
