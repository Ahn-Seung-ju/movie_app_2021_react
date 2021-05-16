import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";
class Home extends React.Component{
  state ={
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const {data: { data : {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({movies, isLoading: false});
  }
  componentDidMount(){
  this.getMovies();
  
}

  //랜더링 할 때마다 호출되는 함수 보여주는 쪽 담당
  render(){
    
    const { isLoading , movies} = this.state;
    return (<section className = "container">
      {isLoading 
      ? <div className = "loader">
        <span className = "loader__text">Loading...</span>
    </div> 
    : (<div className = "movies">
        {movies.map(movie =>(
          <Movie
            key={movie.id}
            id={movie.id}
            year={movie.year}
            title={movie.title}
            summary={movie.summary}
            poster={movie.medium_cover_image}
            genres={movie.genres}
            />
        ))}
    </div>
    )}</section>
    )
  }

}

export default Home;



// constructor(props) {
  //   super(props);
  //   console.log("hello");
  // }


  // state = {
  //   count: 0
  // };
  
  
  //add = () => {
    // console.log("add");
    // this.state.count = 1;
    // this.setState({count: 1});
    //this.setState(current => ({count: current.count + 1}));

  //};
  
  
  //minus = () => {
    // console.log("minus")
    // this.state.count = -1;
    // this.setState({count: -1});
    //this.setState(current => ({count: current.count - 1}));
 // };
  // component가 처음 렌더링 되면 호출되는 함수
  // componentDidMount(){
  //   console.log("component rendered")
  // }
  //업데이트 할 때마다 호출되는 함수 ex) add, minus
  // componentDidUpdate(){
  //   console.log("i just updated")
  // }
  //component가 종료될때 실행되는 함수
  // componentWillUnmount(){
  //   console.log("Goodby, cruel")
  // }
    // <div>
    //   <h1>The number is : {this.state.count}</h1>
    //   <button onClick={this.add}>Add</button>
    //   <button onClick={this.minus}>Minus</button>
    // </div>

    //componentDidMount(){
  // setTimeout(() => {
  //   this.setState({isLoading: false});
  // }, 6000);

  
//}