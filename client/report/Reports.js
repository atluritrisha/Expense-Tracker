import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CategoryPie from "./CategoryPie";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
    maxWidth: "800px",
    margin: "auto",
    marginTop: 40,
    marginBottom: 40,
  },
  separator: {
    marginBottom: 36,
  },
}));

export default function Reports() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CategoryPie />
    </div>
  );
}
