import React from 'react';
import { Countonly } from './features/counter/Countonly';

export default function page2() {
    return (
        <React.Fragment>
            <h1>Page 2</h1>
            <br />
            <h2>Counter from Page1 <Countonly /></h2>
        </React.Fragment>
    )
}
