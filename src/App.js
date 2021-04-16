import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  // withRouter,
} from "react-router-dom";
import Home from "./Components/Home/Home";
import Card from "./Components/Card/Card";
import { Component } from "react";
import { connect } from "react-redux";
import Category from "./Components/Category/Category";
import Blog from "./Components/Blog/Blog";
import Prodact from "./Components/ProdactDetals/ProdactDetals";
import { getAll } from "../src/API/prodactAPI";
import SignUp from "./Components/SignIn/SignUp";
const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    leaders: state.leaders,
  };
};

class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    prodact: [],
  };
  componentDidMount() {
    getAll().then((prodact) => {
      this.setState({
        prodact,
      });
    });
  }

  render() {
    // console.log(this.props.dishes[0].id);
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <Home prodact={this.state.prodact} />
            </Route>
            <Route path="/category" exact>
              <Category prodact={this.state.prodact} />
            </Route>
            <Route path="/Blog">
              <Blog />
            </Route>
            <Route path="/sign-up">
              <SignUp />
            </Route>

            <Route path="/card">
              <Card />
            </Route>
            <Route path="/prodact/:id" exact component={Prodact} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
