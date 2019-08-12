import React from 'react';
import ButtonAdd from './components/ButtonAdd';
import { makeStyles } from '@material-ui/core/styles';
import TableConfig from './components/TableConfig';
import ModalConfigComponent from './components/ModalConfig';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));

export default function Config() {
    const classes = useStyles();
    return (
        <div>
            <ButtonAdd/>
            <div>
                <TableConfig/>
            </div>
            <ModalConfigComponent />
        </div>
    )
}