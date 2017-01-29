import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as movieAction from '../../Actions/moviesAction';

class MoviesPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            movies: { title: "" }
        };
        this.titleChanged = this.titleChanged.bind(this);
        this.titleSaved = this.titleSaved.bind(this);
    }

    titleChanged(event) {
        const movie = this.state.movies;
        movie.title = event.target.value;
        this.setState({ movies: movie });
    }

    titleSaved(event) {
        //alert(`Saving ${this.state.movies.title}`);
        this.props.actions.createMovies(this.state.movies);
    }

    render() {
        return (
            <div className="col-md-12 well">
                <div className="col-md-4">
                    <h2>Add Movies</h2>
                    <input className="form-control" type="text" onChange={this.titleChanged}
                        value={this.state.movies.title} />
                    <input style={{ marginTop: 10 + 'px' }} className="btn btn-primary" type="submit" onClick={this.titleSaved}
                        value="Save movie" />
                </div>
                <div className="col-md-8">
                    <h1>Movies List</h1>

                    <div className="container">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Firstname</th>
                                    <th>Lastname</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.movies.map(function (value, index) {
                                    return (
                                        <tr key={index}>
                                            <td>{value.title}</td>
                                            <td>{value.directorId.split('-').join(' ')}</td>
                                            <td><a href={value.watchHref} target="_blank">{value.watchHref}</a></td>
                                        </tr>
                                    );
                                })}

                            </tbody>
                        </table>
                    </div>


                </div>
            </div>
        );
    }
}

MoviesPage.propTypes = {
    movies: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToprops(state, ownProps) {
    return {
        movies: state.movies
    };
}

function mapDispatchProps(dispatch) {
    return {
        actions: bindActionCreators(movieAction, dispatch)
    };
}

export default connect(mapStateToprops, mapDispatchProps)(MoviesPage);