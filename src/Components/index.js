import React, { useMemo, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import SearchBox from "./SearchBox";
import { getIcon, getWeatherData, KtoC } from "../utils";
import DataComponent from "./DataComponent";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Main() {
  const classes = useStyles();
  const [weatherData, updateData] = useState(null);
  const onSearchBoxValChange = async (props = {}) => {
    if (props) {
      const { city = "" } = props;
      if (city) {
        const result = await getWeatherData(city);
        updateData(result);
      }
    }
  };

  const SearchBoxMemo = useMemo(
    () => <SearchBox onSearchBoxValChange={onSearchBoxValChange} />,
    []
  );
  const cTemp = weatherData &&  weatherData.name && KtoC(weatherData.main.temp);
  const img = weatherData &&  weatherData.name && getIcon(weatherData.weather[0].icon);
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            {SearchBoxMemo}
            {weatherData &&  weatherData.name ? (
              <>
                <h2>{weatherData.name}</h2>
                <img src={img} alt="abc" height="100" width="100" />
                <h2>{cTemp}&#8451;</h2>
              </>
            ) : null}
          </Paper>
        </Grid>
        {weatherData && weatherData.name ? (
          <DataComponent weatherData={weatherData} classes={classes} />
        ) : null}
      </Grid>
    </div>
  );
}
