import React, { Component } from "react";

class DisplayBook extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        const { open } = this.state;
        if (this.props.filmList.length !== 0) {
            return (
                <section id="results" className="displayResults">
                    <div className="wrapper">
                        <div className="bookResults">
                        {this.props.bookList.map((book) => {
                            return (
                                <div className="eachBook" id={book.id}>
                                    <figure className="filmImage">
                                        <img src={`http://image.tmdb.org/t/p/w500/${film.poster_path}`} alt=""/>
                                    </figure>
                                    <div className="filmInfo">
                                        <h3 className="headingDarkBG">{film.title}</h3>
                                        <div className="filmOptions">
                                            <div className="filmSynopsis">
                                                <p>{film.overview}</p>
                                            </div>
                                            <div>
                                                <button onClick={(e) => this.saveFilm(e, film)} id={film.id} className=" displayButton displayButtonBottom saveButton"><i class="far fa-save"></i></button>
                                            </div>
    
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        <div className="searchAgainButton">
                            <a href="#categories">Search Again</a>
                        </div>
                        </div>
                    </div>
                </section>
            )
        } else {
            return null;
        }
    }
}

export default DisplayBook;