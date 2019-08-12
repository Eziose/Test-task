import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import * as action from "../../../store/actions/actions";
import {connect} from "react-redux";

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    }
}));

function ContainedButtons(props) {
    const classes = useStyles();
    const toggleHandler = () => {
        console.log('good')
    }
    return (
        <div>
            <Button variant="contained" color="primary" className={classes.button} onClick={() => {props.onToggleModal()}}>
                Add Config
            </Button>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        onToggleModal: () => dispatch(action.toggleModal()),
    }
};
export default connect(null,mapDispatchToProps)(ContainedButtons);