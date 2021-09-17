import React from 'react';
import PropTypes from 'prop-types';
import { Text, Green, Orange, Red, BigNumbers } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <Text>
      Good:{' '}
      <BigNumbers>
        <Green>{good}</Green>
      </BigNumbers>
    </Text>
    <Text>
      Neutral:{' '}
      <BigNumbers>
        <Orange>{neutral}</Orange>
      </BigNumbers>
    </Text>
    <Text>
      Bad:{' '}
      <BigNumbers>
        <Red>{bad}</Red>
      </BigNumbers>
    </Text>
    <Text>
      Total: <BigNumbers>{total}</BigNumbers>
    </Text>
    <Text>
      Positive feedback: <BigNumbers>{positivePercentage}%</BigNumbers>
    </Text>
  </div>
);

export default Statistics;

// Statistics.propTypes = {
//   good: PropTypes.number,
//   neutral: PropTypes.number,
//   bad: PropTypes.number,
//   total: PropTypes.number,
//   positivePercentage: PropTypes.number,
// };
