import React from 'react';
import {makeStyles} from '@material-ui/core';


export const useStylesTableEditForm = makeStyles((theme) => ({
    root: {
        '& > *':  {
            margin: theme.spacing(1),
            width: '25ch',
        },
        button: {
            margin: theme.spacing(1),
        }
    },
}));

