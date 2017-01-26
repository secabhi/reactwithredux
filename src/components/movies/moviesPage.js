import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
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
        this.props.dispatch(movieAction.createMovies(this.state.movies));
    }

    render() {
        return (
            <div className="col-md-12 well">
                <div className="col-md-4">
                    <h2>Add Movies</h2>
                    <input className="form-control" type="text" onChange={this.titleChanged}
                        value={this.state.movies.title} />
                    <input style={{marginTop:10+'px'}} className="btn btn-primary" type="submit" onClick={this.titleSaved}
                        value="Save movie" />
                </div>
                <div className="col-md-8">
                    <h1>Movies List</h1>
                    {this.props.movies.map(function (value, index) {
                        return (
                            <div key={index}>{value.title}</div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

MoviesPage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    movies: PropTypes.array.isRequired
};

function mapStateToprops(state, ownProps) {
    return {
        movies: state.movies
    };
}

export default connect(mapStateToprops)(MoviesPage);