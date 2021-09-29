import React from 'react';
import { Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) =>
  options.map(option => (
    <Button type="button" key={option} onClick={() => onLeaveFeedback(option)}>
      {option}
    </Button>
  ));

export default FeedbackOptions;
