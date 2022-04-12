import React from "react";

class SectionTitle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            colorPrimary: "#00",
            colorSecondary: "#00"
        };

        this._id = SectionTitle.counter;
    }

    static get counter() {
        SectionTitle._counter = (SectionTitle._counter || 0) + 1;
        return SectionTitle._counter;
    }

    componentDidMount() {
        // this.setState({
        //     colorPrimary: window
        //         .getComputedStyle(this.cp, null)
        //         .getPropertyValue("color"),
        //     colorSecondary: window
        //         .getComputedStyle(this.cs, null)
        //         .getPropertyValue("color")
        // });
    }

    render() {
        return (
   
          <h5>{this.props.title} </h5>  

        );
    }
}

export default SectionTitle;
