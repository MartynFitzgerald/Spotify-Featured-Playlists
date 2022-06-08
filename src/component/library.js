import React from "react";
import { Card, CardActionArea, CardContent, CardMedia, Typography, Grid, Divider } from '@material-ui/core';
import data from "../data/playlists.json"; 
import "./library.css";

export default class Library extends React.Component {
  render() {
    const playlists = data.playlists.items;

    return (
      <div className="component-playlist">
        <Grid container item xs={12} direction="row" justifyContent="space-around" alignItems="flex-start">
          {
            playlists.map((playlist, index) => {
              return (
                <Card key={index} className="classes-card" onClick={(e) => {window.location.href=`/playlist?id=${index}`;}}>
                  <CardActionArea>
                    <CardMedia className="classes-media" image={playlist.images[0].url} title={playlist.name}/>
                    <Divider/>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {playlist.name}
                      </Typography>
                      <Typography style={{ height: 50 }} variant="body2" color="textSecondary" component="p">
                        {playlist.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              );
            })
          }
        </Grid>
      </div>
    );
  }
}