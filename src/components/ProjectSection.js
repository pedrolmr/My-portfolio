import React, { useState, useEffect } from 'react';

import Card from './Card';
import Wrapper from './Wrapper';
import data from '../data';

const initialData = data;
const ProjectSection = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(initialData);
    }, [data]);

    return (
        <Wrapper id="ProjectSection" title="Projects" lineBreak>
            {data.map((card, i) => <Card isOdd={i % 2} card={card} index={i}/>)}
        </Wrapper>
    )

}

export default ProjectSection;