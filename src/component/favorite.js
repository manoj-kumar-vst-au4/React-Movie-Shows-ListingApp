import React from "react";


class Favorite extends React.Component{
    render(){
        return(
            <div className="container-sm mt-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6  ">
                    {!this.props.favorite?"no data found":this.props.favorite.map(data=>{
                    return(
                        <div class="card mb-2 rounded shadow">
                            <div class="card-header bg-dark text-white text-center">
                                <h5>{data.Title}</h5>
                            </div>
                            <div class="card-body">
                            <h6 class="card-title d-inline-block mr-5">Release: {data.Released}</h6>
                                <h6 class="card-title d-inline-block ml-5">Genre: {data.Genre}</h6>
                                <hr/>
                                Description:
                                <p class="card-text text-secondary d-inline-block"> {data.Plot}</p>
                                <hr/>
                                <div className="text-center py-0 ">
                                    <button className="btn btn-danger border border-dark mr-2" onClick={()=>this.props.delete(data.imdbID)}>remove</button>
                                    <a className="btn btn-success border border-dark ml-2" rel="noopener noreferrer" href={"https://www.imdb.com/title/"+data.imdbID} target="_blank">more detail</a>
                                </div>
                            </div>
                        </div>
                    )
                    })}
                </div>
                </div>
            </div>
            )
        }
        
    }

export default Favorite;