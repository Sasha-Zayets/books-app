import React from 'react';
import { Route, Switch } from "react-router-dom";
// pages
import Home from "../pages/Home";
import Recipe from "../pages/Recipe";

const Router = () => (
	<Switch>
		<Route path="/" exact component={Home} />
		<Route path="/recipe/:id" exact component={Recipe} />
	</Switch>
);

export default Router;
