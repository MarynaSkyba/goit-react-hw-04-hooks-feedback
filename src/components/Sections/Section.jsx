import React from 'react';

const Section = ({title, children})=> (
    <>
    <h2>{title}</h2>
    <div>{children}</div>
</>
)

export default Section;