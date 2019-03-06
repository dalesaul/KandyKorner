import React, {Component} from 'react'

class Locations extends Component {
    render() {
        return (
            <article>
            <h3>Store Locations:</h3>
            {this.props.locations.map(singleLocation => {
                return <p key={singleLocation.id}>{singleLocation.name}, {singleLocation.address}</p>
            })}
            </article>

        );
    }
}

export default Locations;