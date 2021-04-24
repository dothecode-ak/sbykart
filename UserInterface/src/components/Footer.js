import React, { Component } from 'react';


class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = { apiresponse: "" };

        fetch('https://sbykart.herokuapp.com/kart')
            .then(response => response.text())
            .then(response => this.setState({ apiresponse: response }));
        console.log(this.state.apiresponse)
    }
    render() {
        return (
            <>
                {this.state.apiresponse}
            </>

        )
    }
}
export default Footer;