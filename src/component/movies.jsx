import React, { Component } from 'react'
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./pagination"
import Like from "./like"
//handleDelete = (movie) => {const movies=this.state.movies.filter(m => m._id !== movie._id); this.setState({movies})};
class Movies extends Component {
    state = { movies: getMovies(), pageSize: 4 }

    handleDelete = (movie) => { const movies = this.state.movies.filter(m => m._id !== movie._id); this.setState({ movies }) };
    render() {
        const { length: count } = this.state.movies
        if (this.state.movies.length === 0) return <h3>There is no movies in the list</h3>
        return <div> <h3>showing{count}movies</h3><table className="table">

            <thead>
                <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                    <th />
                    <th />
                </tr>

            </thead>
            <tbody>
                {this.state.movies.map(movie => (<tr key={movie._id}><td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td><Like liked={movie.liked} /></td>

                    <td>
                        <button onClick={() => this.handleDelete(movie)} className="btn btn-danger">Delete</button>
                    </td>
                </tr>))}

            </tbody>
        </table>
            <Pagination itemCount={count} pageSize={this.state.pageSize} />
        </div>

    }
}

export default Movies;