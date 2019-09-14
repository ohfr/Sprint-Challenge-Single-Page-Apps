import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from "./CharacterCard";
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-around',
  }
})


export default function CharacterList() {
  const classes=useStyles();
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        setCharacter(res.data.results)
        console.log(res.data.results)
      })
      .catch(err => console.log(err))

  }, []);

  return (
    <div className={classes.wrapper}>
      {
        character.map((char, index) => {
          return <CharacterCard key={index} name={char.name} loc={char.location.name} species={char.species} gender={char.gender} status={char.status} pic={char.image} origin={char.origin.name}/>
        })
      }
    </div>
  );
}
