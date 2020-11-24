import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import MediaCard from "../MediaCard";

const ListRecipe = ({ recipes }) => (
  <Box mt={3}>
    <Grid container>
      {
        recipes.map((item, index) => (
          <Grid item lg={6} key={index}>
            <Box mb={2}>
              <MediaCard
                title={item.title}
                image={item.image}
                id={item.id}
              />
            </Box>
          </Grid>
        ))
      }
    </Grid>
  </Box>
);

export default ListRecipe;
