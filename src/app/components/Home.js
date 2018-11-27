import React from "react";

export class Home extends React.Component {
    constructor(props) {
        super();
        this.age = props.age;
    }

    onMakeOlder() {
        this.age += 3;
    }
    render() {
        const age = this.props.age + 1;
        return (
            <div>
                <h3>Hello {this.props.name}!</h3>
                <p>You're almost {this.age}</p>
                <hr/>
                <button className="btn btn-primary">Make me older!</button>
            </div>
        );
    }
}

Home.propTypes = {
    name: React.PropTypes.string,
    age: React.PropTypes.number
}