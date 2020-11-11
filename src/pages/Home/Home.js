import React from "react";
import { useHistory } from "react-router-dom";
import {
	Wrapper,
} from './styles';
import SearchForm from "../../components/SearchForm";

const Home = () => {
	const history = useHistory();

	const onSubmitSearchForm = ({ searchField }) => {
		history.push(`/result-search/${searchField}`);
	};

	return (
		<Wrapper>
			<SearchForm onSubmit={onSubmitSearchForm} />
		</Wrapper>
	)
};

export default Home;
