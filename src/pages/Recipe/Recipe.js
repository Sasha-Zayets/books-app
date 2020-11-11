import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { observer } from "mobx-react-lite";
import recipeStore from "../../store/RecipeStore";
import {
	Wrapper,
	BigImagePicture,
	BigImage,
	Title,
	Content,
} from './styles';

const Recipe = observer(() => {
	const { id } = useParams();
	const recipeInfo = recipeStore.recipeInfo;

	useEffect(() => {
		const loadingData = () => {
			recipeStore.getRecipeInfo(id);
		};

		loadingData();
	}, [id]);

	return (
		<Wrapper>
			<BigImagePicture>
				<BigImage src={recipeInfo.image} />
			</BigImagePicture>
			<Title>
				Name recipe: <i>{ recipeInfo.title }</i>
			</Title>
			<Content
				dangerouslySetInnerHTML={{
					__html: recipeInfo.summary
				}}
			/>
		</Wrapper>
	);
});

export default Recipe;
