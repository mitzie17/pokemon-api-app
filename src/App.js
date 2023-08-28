import React from "react";
import PokemonsList from "./Components/PokemonsList";
import { NewPokemonForm } from "./Components/NewPokemonForm";
import { Home } from "./Components/Home";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Navbar
          expand="lg"
          className="bg-body-tertiary"
          bg="dark"
          data-bs-theme="dark"
        >
          <Navbar.Brand className="navbarBrand" href="/">
            My Pokemon App
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/pokemons">My Pokemon</Nav.Link>
              <Nav.Link href="/newpokemonform">New Pokemon</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Container>
          <Router>
            <div>
              <Switch>
                <Route path="/pokemons">
                  <PokemonsList />
                </Route>

                <Route path="/newpokemonsform">
                  <NewPokemonForm />
                </Route>

                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
          </Router>
        </Container>
      </div>
    );
  }
}
