import React from "react";
import {
	Wrapper,
} from './styles';
import Box from "@material-ui/core/Box";
import SearchForm from "../../components/SearchForm";
import SearchStore from "../../store/SearchStore";
import MediaCard from "../../components/MediaCard";
import { observer } from "mobx-react-lite";
import Grid from "@material-ui/core/Grid";

const searchStore = new SearchStore();

const Home = observer(() => {
	const onSubmitSearchForm = async ({ searchField }) => {
		await searchStore.searchBook(searchField);
	};

	return (
		<Wrapper>
			<SearchForm onSubmit={onSubmitSearchForm} />
			<Box mt={3}>
				<Grid container>
					{
						searchStore.resultsSearch.map((item, index) => (
							<Grid item lg={6} key={index}>
								<Box mb={2}>
									<MediaCard
										title={item.title}
										image={item.image}
										id={item.id}
									/>
								</Box>
							</Grid>
						))
					}
				</Grid>
			</Box>
		</Wrapper>
	)
});

export default Home;
