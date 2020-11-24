import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import {
  Wrapper,
  TitleResult,
  TextBlock,
} from './styles';
import searchStore from "../../store/SearchStore";
import ListRecipe from "../../components/ListRepice";

const ResultSearch = observer(() => {
  const { search } = useParams();

  useEffect(() => {
    const searchRecipe = async () => {
      await searchStore.searchBook(search);
    };

    searchRecipe();
  }, [search]);

  return (
    <Wrapper>
      <Link to="/">Back</Link>
      <TitleResult>
        Search: { search }
      </TitleResult>
      {
        searchStore.resultsSearch.length === 0
        ? (
          <TextBlock>No search results</TextBlock>
        )
        : (
          <ListRecipe recipes={searchStore.resultsSearch} />
        )
      }
    </Wrapper>
  )
});

export default ResultSearch;
