import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {connect} from "react-redux";
import * as action from "../../../store/actions/actions";
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 4),
    },
}));

function SimpleModal(props) {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const toggleHandler = () => {
        console.log(props.showModal)
        props.onToggleModal()
    }
    return (
        <Dialog
            fullWidth={true}
            maxWidth="lg"
            open={props.showModal}
            aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Import Raw URLs</DialogTitle>
            <DialogContent>
                <TextField
                    id="standard-name"
                    label="Name"
                    className={classes.textField}
                    value={values.name}
                    onChange={handleChange('name')}
                    margin="normal"
                />
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={toggleHandler}
                    variant="outlined"
                    color="primary">
                    Cancel
                </Button>

                <Button
                    onClick={toggleHandler}
                    variant="contained"
                    color="primary">
                    Add
                </Button>
            </DialogActions>
        </Dialog>
    );
}
const mapStateToProps = state => {
    return {
        showModal: state.isShowModal
    }
};
const mapDispatchToProps = dispatch => {
    return {
        onToggleModal: () => dispatch(action.toggleModal()),
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(SimpleModal);