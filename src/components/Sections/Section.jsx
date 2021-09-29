import React from 'react';
import { Title } from '../Sections/Section.styled';

const Section = ({ title, children }) => (
  <section>
    <Title>{title}</Title>
    <div>{children}</div>
  </section>
);

export default Section;
