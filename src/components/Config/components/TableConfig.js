import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import * as action from "../../../store/actions/actions";
import { connect } from 'react-redux';


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
}));




function SimpleTable(props) {
    const classes = useStyles();
   const removeHandler = (id) => {
       console.log(id, 'id')
       props.onRemoveConfig(id)
   };
    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">№</TableCell>
                        <TableCell align="center">Сonfig name</TableCell>
                        <TableCell align="center">Change</TableCell>
                        <TableCell align="center">Remove</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.rows.map(row => (
                        <TableRow key={row.id}>
                            <TableCell align="center">{row.id}</TableCell>
                            <TableCell align="center">{row.title}</TableCell>
                            <TableCell align="center">{row.change}</TableCell>
                            <TableCell align="center" onClick={() => {removeHandler(row.id)}}>{row.remove}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}
const mapStateToProps = state => {
    return {
        rows: state.rows
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onRemoveConfig: (id) => dispatch(action.removeConfig(id)),
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(SimpleTable);