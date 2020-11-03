import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

const ContainerBlock = ({ children }) => (
	<Container maxWidth="md" component="main">
		<Grid container spacing={5} alignItems="flex-end">
			<Grid item xs={12}>
				<Box pt={3} pb={3}>
					{ children }
				</Box>
			</Grid>
		</Grid>
	</Container>
);

export default ContainerBlock;
