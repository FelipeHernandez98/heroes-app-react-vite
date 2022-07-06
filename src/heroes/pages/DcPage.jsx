import { HeroeList } from "../components/HeroeList"


export const DcPage = () => {

  const publisher = 'DC Comics'
  return (
    <>
      <h1>Dc Comics</h1>
      <hr/>
    
      <HeroeList publisher={ publisher }/>
    </>
  )
}
