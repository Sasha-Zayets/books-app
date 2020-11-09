import API from "../utils/api";
import { action, makeObservable, observable } from "mobx";

class RecipeStore {
	recipeInfo = {}

	constructor() {
		makeObservable(this, {
			recipeInfo: observable,
			getRecipeInfo: action,
		});
	}

	async getRecipeInfo(id) {
		const result = await API.get(`/recipes/${id}/information`);
		this.recipeInfo = result.data;
		console.log(recipeStore);
	}
}

const recipeStore = new RecipeStore();

export default recipeStore;
