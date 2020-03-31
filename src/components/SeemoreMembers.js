import React from 'react';
import Nav from './Nav';
import CardsUIcont from './CardsUIcont';

class SeemoreMembers extends React.Component {
    render() {
        return (
            <div>
                <Nav home="false" />
                <CardsUIcont />
            </div>

        );
    }
}

export default SeemoreMembers;