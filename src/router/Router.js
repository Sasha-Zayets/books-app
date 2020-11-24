import React from 'react';
import { Route, Switch } from "react-router-dom";
// pages
import Home from "../pages/Home";
import Recipe from "../pages/Recipe";
import ResultSearch from "../pages/ResultSearch";
import RandomRecipe from "../pages/RandomRecipe";

const Router = () => (
	<Switch>
		<Route path="/" exact component={Home} />
		<Route path="/result-search/:search" exact component={ResultSearch} />
		<Route path="/recipe/:id" exact component={Recipe} />
		<Route path="/random-recipe" exact component={RandomRecipe} />
	</Switch>
);

export default Router;
