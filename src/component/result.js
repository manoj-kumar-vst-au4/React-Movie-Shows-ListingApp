import React from "react";

class Result extends React.Component{
    render(){
        
        return(
            <div className="container-sm mt-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6  ">
                    {!this.props.data?"no data found":this.props.data.map(item =>{
                    return(
                    <div class="card mb-3 rounded-lg shadow" style={{"max-width": "640px"}}>
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img src={item.Poster} class="card-img" alt="..." style={{"width":"120px", "height":"200px"}}/>
                                
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Title : {item.Title}</h5>
                                    <p class="card-text">Type : {item.Type}</p>
                                    <p class="card-text">Release : {item.Year}</p>
                                </div>
                                <button className="btn btn-info ml-3 border border-dark" onClick={()=>this.props.addFavorite(item.imdbID)}>Add to Favorite</button>
                                <a className="btn btn-secondary ml-3 border border-dark"  rel="noopener noreferrer" href={"https://www.imdb.com/title/"+item.imdbID} target="_blank" >More Detail...</a>
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

export default Result;
