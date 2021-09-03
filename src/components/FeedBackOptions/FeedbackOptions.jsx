import React from 'react';
import PropTypes from 'prop-types';


const FeedbackOptions = ({options, onLeaveFeedback}) => (
    options.map((option)=> (
       <button type="button" key={option} onClick= {()=>onLeaveFeedback(option)}>{option}</button>
    )))

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    options: PropTypes.array,
    onLeaveFeedback: PropTypes.func,
}          