import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import {
  Wrapper,
  TitleResult,
} from './styles';
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import MediaCard from "../../components/MediaCard";
import searchStore from "../../store/SearchStore";

const ResultSearch = observer(() => {
  const { search } = useParams();
  console.log(search);

  useEffect(() => {
    const searchRecipe = async () => {
      await searchStore.searchBook(search);
    };

    searchRecipe();
  }, [search]);

  return (
    <Wrapper>
      <TitleResult>
        Search: { search }
      </TitleResult>
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

export default ResultSearch;
