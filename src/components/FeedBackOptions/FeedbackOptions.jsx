import React from 'react';


const FeedbackOptions = ({options, onLeaveFeedback}) => (
    options.map((option)=> (
       <button type="button" key={option} onClick= {()=>onLeaveFeedback(option)}>{option}</button>
    )))

export default FeedbackOptions;

          