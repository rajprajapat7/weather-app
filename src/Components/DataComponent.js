import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { KtoC, stampToTime } from "../utils";

function DataComponent(props) {
  const { classes, weatherData } = props;
  const currentTime = stampToTime(weatherData.dt);

  const sunrise = stampToTime(weatherData.sys.sunrise);
  const sunset = stampToTime(weatherData.sys.sunset);
  const dTemp = KtoC(weatherData.main.temp_max);
  const nTemp = KtoC(weatherData.main.temp_min);
  const fTemp = KtoC(weatherData.main.feels_like);
  return (
    <>
      <Grid item xs={6}>
        <Paper className={classes.paper}>{currentTime}</Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <b>Feel Like </b>
          {fTemp}&#8451;
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <b>Day</b>
          {dTemp}&#8451;
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <b>Night</b>
          {nTemp}&#8451;
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <b>Humidity </b> {weatherData.main.humidity} %
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <b>Pressure</b> {weatherData.main.pressure} mBar
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <b>Sunrise</b> {sunrise}
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <b>Sunset</b> {sunset}
        </Paper>
      </Grid>
    </>
  );
}

export default DataComponent;
