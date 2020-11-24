import { observable, makeObservable, action } from "mobx";
import API from "../utils/api";

class RandomRecipe {
  listRecipe = [];
  loading = false;

  constructor() {
    makeObservable(this, {
      loading: observable,
      listRecipe: observable,
      getRandomRecipe: action,
    });
  }

  async getRandomRecipe() {
    this.loading = true;
    const { data } = await API.get('/recipes/random?number=10');
    this.listRecipe = data.recipes;

    this.loading = false;
  }
}

const randomRecipe = new RandomRecipe();

export default randomRecipe;
