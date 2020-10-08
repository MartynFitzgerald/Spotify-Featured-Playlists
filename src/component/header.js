import React from "react";
import { Link } from 'react-router-dom';
import Grid from "@material-ui/core/Grid";
import TimerIcon from '@material-ui/icons/Timer';
import "./header.css";

function FormatSeconds(timer) {
  let d = Math.floor(timer / (3600 * 24));
  let h = Math.floor((timer % (3600*24) / 3600));
  let m = Math.floor(timer % 3600 / 60);
  let s = Math.floor(timer % 60);
  
  var dString = d > 0 ? d + (d === 1 ? " day, " : " days, ") : "";
  var hString  = h > 0 ? h + (h === 1 ? " hour, " : " hours, ") : "";
  var mString  = m > 0 ? m + (m === 1 ? " minute, " : " minutes, ") : "";
  var sString  = s > 0 ? s + (s === 1 ? " second" : " seconds") : "";

  return dString + hString + mString + sString;
}

export default class Header extends React.Component {
  render() {
    return (
      <div className="component-header">
        <Grid container item xs={12} direction="row" justify="space-between" alignItems="center">
          <Link className="component-link" to="/">
            <img
              //https://www.flaticon.com/free-icon/spotify_2111624?term=2111624&page=1&position=1
              src="//www.flaticon.com/svg/static/icons/svg/2111/2111624.svg"
              width="32"
              height="32"
              alt=""
            />
            Spotify's Featured Playlists
          </Link>
          <div/>
          <TimerIcon onClick={(e) => {window.alert(`You have been on the website for: ${FormatSeconds(localStorage.getItem('timer'))}`)}} className="component-icon" fontSize="large"/>
        </Grid>
      </div>
    );
  }
}