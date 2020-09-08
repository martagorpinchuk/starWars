import React, { useState, useEffect, useCallback } from "react";
import First from './First';
import Second from "./Second";
import axios from "axios";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";

const Wrapper = styled.div`
  padding: 10px;
  cursor: pointer;
  color: black;
  text-align: center;
  &:hover {
    background-color: skyblue;
    color: white;
  }
`;


const Search = styled.div`
  padding: 20px;
  cursor: pointer;
  color: black;
  text-align: center;
`;


const Info = styled.div`
  padding: 20px;
  cursor: pointer;
  color: black;
  text-align: center;
`;

export function Films () {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/films/')
      .then((res) => {
        console.log(res.data.results);
        setFilms(res.data.results);
      });
  }, [setFilms]);

  const toFilm = useCallback((film, index) => <FilmListItem film={film.title} idf={index + 1} />);

  return (
    <div>{ films.map(toFilm) }</div>
  );
}


function FilmListItem ({film, idf}) {
  return (
    <Link to={`/${idf}`} key={idf}>
      <Wrapper>{film}</Wrapper>
    </Link>
  );
}

export function Film (props) {
  const [film, setFilm] = useState();
  let { filmId } = useParams();

  useEffect(() => {
    axios.get(`https://swapi.dev/api/films/${filmId}/`)
      .then((res) => {
        console.log(res);
        setFilm(res.data);
      });
  }, [setFilm]);

  if (!film) {
    return <div>Loading...!</div>;
  }

  return (
    <div>
      <Link to="/films">Back</Link>
      <div>title: { film.title }</div>
      <div>episode_id: { film.episode_id }</div>
      <div>opening_crawl: { film.opening_crawl }</div>
      <div>director: { film.director }</div>
    </div>
  );
}

//end of films


export function People () {
  const [people, setPeople] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
      .then((res) => {
        //console.log(res.data.results);
        setPeople(res.data.results);
      });
  }, [setPeople]);

  const toPerson = useCallback((person, index) => <PersonListItem name={person.name} id={index + 1} />);

 

  const filteredPeople = people.filter( character => {
    return character.name.toLowerCase().includes(search.toLowerCase())
  } ) 


  return (
    <Search>
      <input 
        type="text" 
        placeholder="search..." 
        onChange={ e => setSearch(e.target.value) }
      />
      <br />
        <Link to="/films">Films</Link>
      <div>{ filteredPeople.map(toPerson) }</div>
    </Search>
  );
}


function PersonListItem ({name, id}) {
  return (
    <Link to={`/${id}`} key={id}>
      <Wrapper>{name}</Wrapper>
    </Link>
  );
}

export function Person (props) {
  const [person, setPerson] = useState();
  let { personId } = useParams();

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/${personId}/`)
      .then((res) => {
        console.log(res);
        setPerson(res.data);
      });
  }, [setPerson]);

  if (!person) {
    return <div>Loading...</div>;
  }


  return (
    <Info>
      <Link to="/">Back</Link>
      <div>name: { person.name }</div>
      <div>gender: { person.gender }</div>
      <div>height: { person.height }</div>
      <div>hair: { person.hair_color }</div>
      <Link to="/films">Films</Link>
    </Info>
  );
}


export default function App() {
  return (
    <Router>
      <First />
      <Second />      
    </Router>
  );
}

