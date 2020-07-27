import React from "react";
import Axios from "axios";
import '../index.css';

export default class BookingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movieTitle : []

        }
    }

    componentDidMount() {
        Axios.get("http://localhost:9090/cinema/movies").then((res) => {
          const movieTitle = res.data;
          this.setState({ movieTitle });
        });
      }

      render() {
        const showMovies = this.state.movieTitle.map(movie => {
            return (
                <option value={movie.title}>{movie.title}</option>
        )})
        
        
        return(
            <select>
                {showMovies}
            </select>
        );
      }


}


   





    //  render() {
    //     return(
    //         <div class="form-container">
    //                 <form onSubmit={this.handleSubmit}>
    //                     <h2>Booking Form</h2>
    //                         <div>
    //                         <label>Movie Title</label>
    //                         <select name="movie-title" component="select" >
    //                             <option value={this.state.newBooking.title}>{this.state.newBooking.title}</option>
    //                             <option value="movie2">Movie 2</option>
    //                             <option value="movie3">Movie 3</option>
    //                         </select>
    //                         </div>

    //                         <div>
    //                         <label>Screen</label>
    //                         <select name="screen" component="select" >
    //                             <option value="screen1">Screen 1</option>
    //                             <option value="screen2">Screen 2</option>
    //                         </select>
    //                         </div>

    //                         <div>
    //                         <label>Date</label>
    //                         <input type="date" name="date" />
    //                         </div>

    //                         <div>
    //                         <label>Time</label>
    //                         <select name="screen" component="select" >
    //                             <option value="screen1">12:00</option>
    //                             <option value="screen2">Screen 2</option>
    //                         </select>
    //                         </div>

    //                         <div>
    //                         <label>Name</label>
    //                         <input name="customerName" component="input" />
    //                         </div>

    //                         <div>
    //                             <h3>Prices</h3>
                                
    //                                 <p>Adult - £12.55</p>
    //                                 <p>Child - £7.75</p>
    //                                 <p>Concession - £9.88</p>
                                
    //                         </div>

    //                         <div>
    //                         <label>Adult (16+)</label>
    //                         <input type="number" name="adultTicket" component="input" />
    //                         </div>

    //                         <div>
    //                         <label>Child</label>
    //                         <input type="number" name="childTicket" component="input" />
    //                         </div>

    //                         <div>
    //                         <label>Concession</label>
    //                         <input type="number" name="concessionTicket" component="input" />
    //                         </div>

    //                     <button type="submit">Proceed To Payment</button>
    //                 </form>
    //         </div>
    //     );
    // }