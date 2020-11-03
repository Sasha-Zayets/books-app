import React from 'react';
import { Route, Switch } from "react-router-dom";
// pages
import Home from "../pages/Home";

const Router = () => (
	<Switch>
		<Route path="/" component={Home} />
	</Switch>
);

export default Router;
