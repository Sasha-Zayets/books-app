import React, { useState } from "react";
import { observer } from 'mobx-react-lite';
import SearchStore from "../../store/SearchStore";

const Home = observer(() => {
	const [search] = useState(() => new SearchStore());

	const changeValue = ({ target }) => {
		search.changeValue(target.value);
	};

	const changeFirstName = ({ target }) => {
		search.changeFirstName(target.value);
	};

	const changeLastName = ({ target }) => {
		search.changeLastName(target.value);
	};

	return (
		<div>
			home page { search.searchValue }
			<input onChange={changeValue} />
			<input onChange={changeFirstName} placeholder="First Name" />
			<input onChange={changeLastName} placeholder="Last Name" />
			<hr />
			<h1>
				{ search.fullName }
			</h1>
		</div>
	)
});

export default Home;
