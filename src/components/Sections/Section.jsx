import React from 'react';
import PropTypes from 'prop-types';
import { Title } from '../Sections/Section.styled';

const Section = ({ title, children }) => (
  <>
    <Title>{title}</Title>
    <div>{children}</div>
  </>
);

export default Section;

// Section.propTypes = {
//     title: PropTypes.string,
//     children: PropTypes.element,
// }
