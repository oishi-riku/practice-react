import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import {Link} from 'react-router-dom';

import {readEvents} from '../action';

class EventsIndex extends React.Component {
    componentDidMount() {
        this.props.readEvents();
    }

    renderEvents() {
        return _.map(this.props.events, event => (
            <React.Fragment key={event.id}>
                <tr>
                    <td>{event.id}</td>
                    <td>
                        <Link to={`/events/${event.id}`}>
                            {event.title}
                        </Link>
                    </td>
                    <td>{event.body}</td>
                </tr>
            </React.Fragment>
        ))
    }

    render() {
        return (
            <React.Fragment>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>TITLE</th>
                            <th>BODY</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderEvents()}
                    </tbody>
                </table>
                <Link to="/events/new/">New Event</Link>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return ({events: state.events});
}

const mapDispatchToProps = ({ readEvents });

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)
