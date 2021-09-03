import React from 'react';
import PropTypes from 'prop-types';

const Section = ({title, children})=> (
    <>
    <h2>{title}</h2>
    <div>{children}</div>
</>
)

export default Section;

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.element,
}