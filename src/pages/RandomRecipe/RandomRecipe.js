import React, { useEffect } from "react";
import randomRecipe from "../../store/RandomRecipe";
import { observer } from "mobx-react-lite";
import ListRecipe from "../../components/ListRepice";
import {
  Wrapper,
  Title,
  LoaderBlock,
} from './styles';
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";

const RandomRecipe = observer(() => {
  useEffect(() => {
    const getRecipe = async () => {
      await randomRecipe.getRandomRecipe();
    };

    getRecipe();
  }, []);

  const loadingNewRecipes = async () => {
    await randomRecipe.getRandomRecipe();
  };

  return (
    <Wrapper>
      <Title>Random Recipe</Title>
      <Button
        variant="contained"
        color="primary"
        disabled={randomRecipe.loading}
        onClick={loadingNewRecipes}
      >
        Loading new recipes
      </Button>
      {
        randomRecipe.loading
          ? (
            <LoaderBlock>
              <CircularProgress />
            </LoaderBlock>
          )
          : <ListRecipe recipes={randomRecipe.listRecipe} />
      }
    </Wrapper>
  );
});

export default RandomRecipe;
