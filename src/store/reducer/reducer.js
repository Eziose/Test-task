import * as actionTypes from '../actions/actionsType';

const initialState = {
    valueOnSelect: '',
    day: '',
    month: '',
    year: '',
    gender: '',
    email: '',
    password: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.DATA_FROM_FORM_BLOCKS:
            return {
                ...state,
                valueOnSelect: action.valueOnSelect,
                day: action.day,
                month: action.month,
                year: action.year,
                gender: action.gender
            };
        case actionTypes.DATA_FROM_FORM_INPUT:
            return {
                ...state,
                email: action.formData.email,
                password: action.formData.password
            };
        default:
            return state;
    }
};

export default reducer;