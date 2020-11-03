import React from 'react';
import Header from "../../components/Header";
import Container from "../../components/Container";

const Default = ({ children }) => (
	<>
		<Header />
		<Container>{ children }</Container>
	</>
);

export default Default;
