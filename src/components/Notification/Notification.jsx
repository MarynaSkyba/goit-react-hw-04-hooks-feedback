import React from 'react';
import PropTypes from 'prop-types';
import { Text } from './Notification.styled';

const Notification = ({ message }) => <Text>{message}</Text>;
export default Notification;

// Notification.propTypes = {
//     message: PropTypes.string
// }
