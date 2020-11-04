import React from "react";
import {
	Wrapper,
} from './styles';
import SearchForm from "../../components/SearchForm";

const Home = () => {
	const onSubmitSearchForm = (data) => {
		console.log(data);
	};

	return (
		<Wrapper>
			<SearchForm onSubmit={onSubmitSearchForm} />
		</Wrapper>
	)
};

export default Home;
