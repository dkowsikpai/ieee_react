import React from 'react';
import Nav from './Nav';
import CardsUIcont from './CardsUIcont';

class SeemoreMembers extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

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