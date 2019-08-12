import * as actionTypes from '../actions/actionsType';
import IconButton from "@material-ui/core/IconButton";
import CreateIcon from "@material-ui/icons/Create";
import React from "react";
import DeleteIcon from '@material-ui/icons/Clear';


const initialState = {
    valueOnSelect: '',
    day: '',
    month: '',
    year: '',
    gender: '',
    email: '',
    password: '',
    isShowModal: false,
    rows: [
        {id: 1, title: 'biglead', change: <IconButton><CreateIcon /></IconButton>, remove: <IconButton><DeleteIcon/></IconButton>},
        {id: 2, title: 'poppy', change: <IconButton><CreateIcon /></IconButton>, remove: <IconButton><DeleteIcon/></IconButton>},
        {id: 3, title: 'daddy', change: <IconButton><CreateIcon /></IconButton>, remove: <IconButton><DeleteIcon/></IconButton>},
        {id: 4, title: 'trueland', change: <IconButton><CreateIcon /></IconButton>, remove: <IconButton><DeleteIcon/></IconButton>}
    ]
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
        case actionTypes.REMOVE_CONFIG:
            let newRos = state.rows.filter(row => row.id !== action.id)
            return {
                ...state,
                rows: newRos
            };
        case actionTypes.TOGGLE_MODAL:
            return {
                ...state,
                isShowModal: !state.isShowModal
            };
        default:
            return state;
    }
};

export default reducer;