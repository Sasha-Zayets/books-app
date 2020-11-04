import React from "react";
import {
	Wrapper,
} from './styles';
import Box from "@material-ui/core/Box";
import SearchForm from "../../components/SearchForm";
import SearchStore from "../../store/SearchStore";
import MediaCard from "../../components/MediaCard";
import { observer } from "mobx-react-lite";

const searchStore = new SearchStore();

const Home = observer(() => {
	const onSubmitSearchForm = async ({ searchField }) => {
		await searchStore.searchBook(searchField);
	};

	return (
		<Wrapper>
			<SearchForm onSubmit={onSubmitSearchForm} />
			<Box mt={3}>
				{
					searchStore.resultsSearch.map((item, index) => (
						<MediaCard
							key={index}
							title={item.title}
							image={item.image}
						/>
					))
				}
			</Box>
		</Wrapper>
	)
});

export default Home;
