import React from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { useForm } from 'react-hook-form';
import {
	Form,
	FlexBox,
} from './styles';

const SearchForm = ({ onSubmit }) => {
	const { register, handleSubmit, errors } = useForm();

	return (
		<Form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
			<Typography component="h3" variant="h3" align="center" color="textPrimary" gutterBottom>
				Recipes search
			</Typography>
			<FlexBox>
				<TextField
					id="search"
					name="searchField"
					label="Recipes name"
					variant="outlined"
					size="small"
					fullWidth
					error={Boolean(errors.searchField)}
					helperText={errors.searchField ? 'Field is required' : ''}
					inputRef={register({ required: true })}
				/>
				<Box pl={3}>
					<Button
						type="submit"
						variant="contained"
						color="primary"
					>
						search
					</Button>
				</Box>
			</FlexBox>
		</Form>
	);
}

export default SearchForm;
