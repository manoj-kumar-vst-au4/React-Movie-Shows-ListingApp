import React from 'react';
import Search from "./component/search";
// import NavBar from "./component/navBar";
import tv from "./component/tv.svg";
import Result from "./component/result";
import Favorite from "./component/favorite";
import { BrowserRouter, Route, Link } from "react-router-dom";


class App extends React.Component{
  state={
    data: [],
    favorite: [],
    isShow: false
  }
   
  show (){
    this.setState({
      isShow: true
    })
  }
  getData = async(key) => {
    const url = "http://www.omdbapi.com/?apikey=ee442c79&s="+key;
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data.Search)
    this.setState({ data : data.Search})
  }

  addFavorite = async(id) => {
    const url = "http://www.omdbapi.com/?apikey=ee442c79&i="+id;
    const response = await fetch(url);
    const data = await response.json();
    let info = this.state.favorite.slice();
      info.push(data)
    this.setState({ favorite : info})
  }

  delete = (id) => {
    const filteredItems = this.state.favorite.filter((item) => {
      return item.imdbID !== id
    })

    
    this.setState({
      favorite: filteredItems,
    })
  }

  render(){
    return(
      <BrowserRouter>
        <div className="container-fluid-lg">
          <div className="bg-dark ">
            <Link to ="/" >
              <img src={tv} width="30" height="30" className="d-inline-block align-top ml-3" alt=""></img>
            </Link>
            <div className="d-inline-block align-top mr-5" >
              <button className="btn btn-dark border border-dark ml-5">
                <Link to="/" className="text-white">
                  Home
                </Link>
              </button>
            </div>
            <div className="d-inline-block align-top mr-5"  >
              <button className="btn btn-dark border border-dark">
                <Link to="/favorite" className="text-white">
                  Favorite
                </Link>
              </button>
            </div>  
          </div>
        
          <Route exact path="/">
            <Search
              userInput = {(input) => this.setState({input:input})}
              getData ={this.getData}
              data = {this.state.data}
            />

            <Result
              data = {this.state.data}
              addFavorite ={this.addFavorite}
            />
          </Route>

          <Route path="/favorite">
            {this.state.favorite.length === 0 ? <div className="text-center mt-5"><h2 className="mt-5 text-danger">There is nothing to see!</h2><h2 className="text-success mt-2">Add Something to see.</h2></div>:<Favorite
              favorite={this.state.favorite}
              delete ={this.delete}
            />}
          </Route>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
