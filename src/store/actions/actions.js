import * as actionsType from './actionsType';

export const sendFormFromBlocks = (value, day, month, year, gender) => {
    return {
        type: actionsType.DATA_FROM_FORM_BLOCKS,
        valueOnSelect: value,
        day: day,
        month: month,
        year: year,
        gender: gender
    }
};

export const sendFormFromInput = (formData) => {
    return {
        type: actionsType.DATA_FROM_FORM_INPUT,
        formData: formData
    }
};