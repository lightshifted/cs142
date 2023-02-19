import React from 'react';

import Example from '../example/Example';
import Header from '../header/Header';
import States from '../states/States';

class Views extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            view: 'Example'
        };
    }

    setView = (value) => {
        this.setState({ view: value });
    };

    render() {
        return (
            <React.Fragment>
                <div style={{textAlign: 'center', margin: '20px 0'}}>
                    <button onClick={() => this.setView(this.state.view === 'Example' ? 'States': 'Example')}>
                        Switch to {this.state.view === 'Example' ? 'States' : 'Example'}
                    </button>
                </div>
                {this.state.view === 'Example' ? (
                    <React.Fragment>
                        <Header />
                        <Example />
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Header />
                        <States />
                    </React.Fragment>
                )}
            </React.Fragment>
        );
    }
}

export default Views;
