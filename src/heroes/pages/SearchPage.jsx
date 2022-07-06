import { useLocation, useNavigate } from "react-router-dom"
import queryString from "query-string";
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components/HeroCard"
import { getheroesByname } from "../helpers/getHeroesByName";


export const SearchPage = () => {

  // Usamos el navigate para construir la ruta con los parametros
  const navigate = useNavigate();
  // Usamos el location para recibir los parametros
  const location = useLocation();
  // Usamos el queryString para separar los params del URL
  const query = queryString.parse(location.search)

  const heroes = getheroesByname(query.searchText)

  const { searchText, onInputChange} = useForm({
    searchText: query.searchText
  })

  const onSearchSubmit = (event)=>{
    event.preventDefautl();
    if(searchText.trim().length <= 1 ) return;

    //Construimos el url, l odejamos vacio esto indica que será esta misma ruta (Es decir a esta misma pagina)
    navigate(`? ${ searchText.value }`);
  }

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={ onSearchSubmit }>
            <input
              type='text'
              placeholder="Search to hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={ searchText }
              onChange={ onInputChange }
            />

            <button className="btn btn-outline-primary mt-1">
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {
              ( query.searchText === '' )
                ? <div className="alert alert-primary">Search a hero</div>
                : ( heroes.length === 0 ) 
                  && <div className="alert alert-danger">No hero with <b>{ query.searchText }</b></div>
            }

          {
            heroes.map( hero => (
              <HeroCard key={ hero.id } hero={ hero } />
            ))
          }
        </div>
      </div>

    </>
  )
}
