import React from "react";

/**
 * Receives the person data as props.
 */
class Card extends React.Component {
    constructor(props) {
        super(props);
        /**
         * Initially the phone number is hidden.
         */
        this.state = {
            display: false
        }
        this.switchDisplayPhoneNumber = this.switchDisplayPhoneNumber.bind(this);
    }

    switchDisplayPhoneNumber = function() {
        /**
         * Each time the button is clicked, display should be modified.
         * true => false
         * false => true
         * display => !display
         */
        this.setState({
            display: !this.state.display
        });
    };

    render() {
        return(
            <div className="card bg-info text-white col">
                <img className="card-img-top mt-2" src={this.props.person.image} alt="something to prevent the warning"/>
                <div className="card-body">
                    <h4 className="card-title">{this.props.person.name}</h4>
                    <button className="btn btn-primary" onClick={this.switchDisplayPhoneNumber}>
                        {
                            /**
                             * Returns "Show number" if the number is hidden or the number otherwise.
                             */
                            (this.state.display === false)
                            ? "Show number"
                                : this.props.person.phone
                        }
                    </button>
                </div>
            </div>
        );
    }
}

export default Card;
