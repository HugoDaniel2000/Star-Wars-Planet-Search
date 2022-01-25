export default async function apiPlanets() {
  const objPlanets = await fetch('https://swapi-trybe.herokuapp.com/api/planets/')
    .then((obj) => obj.json())
    .then((data) => data.results);
  return objPlanets;
}
