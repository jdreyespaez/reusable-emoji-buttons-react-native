import React, { Component } from 'react'; 
import { Text, TouchableOpacity, View, ViewPropTypes } from 'react-native'; 
import Base, { Rojo, Gris} from './styles';
import PropTypes from 'prop-types';

// Step 2: A class-based component is used with PropTypes
const { array, string, object, bool, func, any } = PropTypes;

class ReusableButton extends Component {
    static propTypes = {
        // Step 4.
    }
    getTheme() {
        // Step 5.
    }

    render() {
        // Step 6.
    }
};

export default ReusableButton; 