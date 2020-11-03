import {observable, action, makeObservable, computed} from 'mobx';

class SearchStore {
	searchValue = '';
	firstName = '';
	lastName = '';

	constructor() {
		makeObservable(this, {
			searchValue: observable,
			firstName: observable,
			lastName: observable,
			changeValue: action,
			changeFirstName: action,
			changeLastName: action,
			fullName: computed,
		});
	}

	changeValue(value) {
		this.searchValue = value;
	}

	changeFirstName(value) {
		this.firstName = value;
	}

	changeLastName(value) {
		this.lastName = value;
	}

	get fullName() {
		return `${this.firstName} ${this.lastName}`;
	}
}

export default SearchStore;
