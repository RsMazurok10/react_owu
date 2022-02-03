import Joi from "joi";

export const carValidator=Joi.object({
    model:Joi.string().regex(new RegExp('^[[a-zA-ZА-яёЁіІїЇ]{1,20}$')).required(),
    price:Joi.number().min(0).max(100000).required(),
    year:Joi.number().min(1950).max(new Date().getFullYear()).required()
});