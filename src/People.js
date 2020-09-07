// import React from "react";

// function People () {
//     const [people, setPeople] = useState([]);
//     const [search, setSearch] = useState('');
//     //const [filtered, setFiltered] = useState([]);
  
//     useEffect(() => {
//       axios.get('https://swapi.dev/api/people/')
//         .then((res) => {
//           //console.log(res.data.results);
//           setPeople(res.data.results);
//         });
//     }, [setPeople]);
  
//     const toPerson = useCallback((person, index) => <PersonListItem name={person.name} id={index + 1} />);
  
   
  
//     const filteredPeople = people.filter( character => {
//       return character.name.toLowerCase().includes(search.toLowerCase())
//     } ) 
  
  
//     return (
//       <Search>
//         <input 
//           type="text" 
//           placeholder="search..." 
//           onChange={ e => setSearch(e.target.value) }
//         />
//         <div>{ filteredPeople.map(toPerson) }</div>
//       </Search>
//     );
//   }

  
//   export default People