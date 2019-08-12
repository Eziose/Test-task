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
export const removeConfig = (id) => {
    return {
        type: actionsType.REMOVE_CONFIG,
        id: id
    }
};

export const toggleModal = () => {
    return {
        type: actionsType.TOGGLE_MODAL
    }
};
export const hideModal = () => {
    return {
        type: actionsType.HIDE_MODAL
    }
};