import {observable, action, makeObservable } from 'mobx';
import API from "../utils/api";

class SearchStore {
	resultsSearch = [];

	constructor() {
		makeObservable(this, {
			resultsSearch: observable,
			searchBook: action,
		});
	}

	async searchBook(value) {
		try {
			const result = await API.get('/recipes/complexSearch', {
				params: {
					query: value,
				},
			});

			if (result.status === 200) {
				this.resultsSearch = result.data.results;

				return result;
			}
		} catch (e) {
			console.log(e);
		}
	}
}

const searchStore = new SearchStore();

export default searchStore;
