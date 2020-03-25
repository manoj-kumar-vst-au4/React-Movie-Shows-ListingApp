import React from "react";

class Search extends React.Component{
    
    render(){
        return(
            <div > 
                <div className=" container-sm d-flex justify-content-center mt-3">
                    <input className="form-control col-md-7"  onChange={(e) =>this.props.getData(e.target.value)} placeholder="Enter Movie/Series Name..."/>
                </div>
            </div>
        )
    }
}

export default Search;