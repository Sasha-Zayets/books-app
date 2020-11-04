import {observable, action, makeObservable } from 'mobx';
import API from "../utils/api";

class SearchStore {
	searchValue = '';
	resultsSearch = [];

	constructor() {
		makeObservable(this, {
			searchValue: observable,
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
				this.searchValue = value;
				this.resultsSearch = result.data.results;

				console.log(result.data.results);
				return result;
			}
		} catch (e) {
			console.log(e);
		}
	}
}

export default SearchStore;
