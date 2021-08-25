import React from "react";
import Card from "./Card";
import CarouselButton from "./CarouselButton";

/**
 * Should receive in props a list of persons (with name, phone number and image) and a maximum number of persons (cards)
 * displayed at once.
 *
 * Only works when persons.length % maxCards == 0 (otherwise the slice in the render function should be modified)
 */
export default class ContactsList extends React.Component {
    constructor(props) {
        super(props);
        /**
         * Initially it displays maxCards persons from the first element in the array
         */
        this.state = {
            startIndex: 0
        }
        this.goBackward = this.goBackward.bind(this);
        this.goForward = this.goForward.bind(this);
    }

    /**
     * goBackward and goForward will update the startIndex
     *
     * goBackward
     *
     * If we go backwards then we have to display the previous maxCards persons.
     * e.g.
     *  maxCards = 3, persons.length = 6
     *  1) startIndex = 3 => currently displayed cards [3, 3 + maxCards) = [3, 6)
     *  Next should be displayed the cards in [3 - maxCards, 3) = [0, 3)
     *
     *  2) startIndex = 0 => currently displayed cards [0, maxCards) = [0, 3)
     *  Next should be displayed the cards in [0 - maxCards, 0) = [-3, 0) - IMPOSSIBLE since all the indexes start from 0
     *  Add the array length to make sure the range includes valid indexes
     *  => [0 - maxCards + persons.length, 0 + persons.length) = [3, 6)
     *
     *  3) What happens now if startIndex = 3?
     *  [3 - maxCards + persons.length, 3 + persons.length) = [6, 9) - OUT of range
     *  We also need to compute the remainder since all the indexes have to be < persons.length
     *
     *  Finally: newStartIndex = (startIndex - maxCards + persons.length) % persons.length
     */
    goBackward = function () {
        this.setState((state, props) => ({
            startIndex: (state.startIndex - props.maxCards + props.persons.length) % props.persons.length
        }));
    }

    /**
     * goForward
     *
     * Almost the same as goBackward except that we don't need to add persons.length since
     * startIndex > 0, maxCards > 0 => startIndex + maxCards > 0
     */
    goForward = function () {
        this.setState((state, props) => ({
            startIndex: (state.startIndex + props.maxCards) % props.persons.length
        }));
    }

    render() {
        return (
            <div className="container-fluid d-flex flex-column min-vh-100 justify-content-center">
                <div className="display-1 text-center mb-5">
                    Contacts list
                </div>
                <div className="row">
                    <CarouselButton icon="arrow_back_ios" onClick={this.goBackward}/>
                    {
                        /**
                         * Get all the persons that should be displayed now and create a card for each one
                         */
                        this.props.persons
                            .slice(this.state.startIndex, this.state.startIndex + this.props.maxCards)
                            .map(function (person) {
                                return <Card person={person} />
                            })
                    }
                    <CarouselButton icon="arrow_forward_ios" onClick={this.goForward} />
                </div>
            </div>
        );
    }
}
