import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper, Container  } from '@material-ui/core';
import { useLocation } from "react-router-dom";
import LinkIcon from '@material-ui/icons/Link';
import data from "../data/playlists.json"; 
import "./playlist.css";

export default function Playlist() {
  const search =  useLocation().search;
  const id = new URLSearchParams(search).get('id');
  const playlists = data.playlists.items;
  const playlist = playlists[id];

  return (
    <div className="component-playlist">
      <img  src={playlist.images[0].url} onClick={(e) => {window.open(playlist.external_urls.spotify)}} alt={playlist.name} width="320" height="320"/>
      <Container fixed>
        <TableContainer className="component-tableContainer" component={Paper}>
          <Table className="component-table" aria-label="playlist table">
            <TableBody>
              <TableRow>
                <TableCell align="center"><h2>ID:</h2></TableCell>
                <TableCell align="center"><h3>{playlist.id}</h3></TableCell>
                <TableCell align="center"><LinkIcon style={{cursor: "pointer"}} fontSize="large" onClick={(e) => {window.open(playlist.external_urls.spotify)}}/></TableCell>
                <TableCell align="center"><img src={process.env.PUBLIC_URL + `/logo512.png`} alt="" width="32" height="32" onClick={(e) => {window.open(playlist.uri)}}/></TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center"><h2>Name:</h2></TableCell>
                <TableCell align="center"><h3>{playlist.name}</h3></TableCell>
                <TableCell align="center"><LinkIcon style={{cursor: "pointer"}} fontSize="large" onClick={(e) => {window.open(playlist.external_urls.spotify)}}/></TableCell>
                <TableCell align="center"><img src={process.env.PUBLIC_URL + `/logo512.png`} alt="" width="32" height="32" onClick={(e) => {window.open(playlist.uri)}}/></TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center"><h2>Description:</h2></TableCell>
                <TableCell align="center"><h3>{playlist.description}</h3></TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center"><h2>Total Tracks:</h2></TableCell>
                <TableCell align="center"><h3>{playlist.tracks.total}</h3></TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center"><h2>Owner:</h2></TableCell>
                <TableCell align="center"><h3>{playlist.owner.display_name}</h3></TableCell>
                <TableCell align="center"><LinkIcon style={{cursor: "pointer"}} fontSize="large" onClick={(e) => {window.open(playlist.owner.external_urls.spotify)}}/></TableCell>
                <TableCell align="center"><img src={process.env.PUBLIC_URL + `/logo512.png`} alt="" width="32" height="32" onClick={(e) => {window.open(playlist.owner.uri)}}/></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
}