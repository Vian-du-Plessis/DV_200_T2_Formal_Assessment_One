import axios from "axios";
import { useState } from "react";

function App() {

    const [inputs, setInputs] = useState( {} );

    const handleChange = ( e ) => {
        const name = e.target.name;
        const value = e.target.value;

        setInputs( values => ( { ...values, [name]: value } ) );

        console.log( inputs );
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();

        console.log( inputs );

        axios.post( 'http://localhost/Server/addPet', inputs )
        .then( ( res ) => {
            console.log( res );
        })
        .catch( ( err ) => {
            console.log( err );
        })
    }


  return (
    <div className="App">
        <div className="formCon">
          <h1>Expawts: Pet Relocation</h1>
          <p>Sign up below and we will send you a quote!</p>
          <form>
            <input name="petName" placeholder="Name of Pet" onChange={ handleChange }/>
            <select name="petSpecie" defaultValue='' onChange={ handleChange }>
              <option value='' disabled hidden>Species of Pet</option>
              <option>Canine</option>
              <option>Feline</option>
              <option>Equine</option>
              <option>Rodent</option>
              <option>Avian</option>
              <option>Reptile</option>
            </select>
            <select name="petGender" defaultValue='' onChange={ handleChange }>
              <option value='' disabled hidden>Gender/Sex of Pet</option>
              <option>Male</option>
              <option>Female</option>
            </select>
            <input name="petAge" placeholder="Age of Pet (years) "  onChange={ handleChange }/>
            <input name="petMicroId" placeholder="Pet MicroChip Id"  onChange={ handleChange }/>
            <input name="ownerName" placeholder="Pet Owner Name"  onChange={ handleChange }/>
            <input name="ownerId" placeholder="Pet Owner ID Number"  onChange={ handleChange }/>
            <input name="exOrigin" placeholder="Export Origin"  onChange={ handleChange }/>
            <input name="exDestination" placeholder="Export Destination"  onChange={ handleChange }/>

            <button type='submit' onClick={ handleSubmit }>Lets Export That Pet!</button>

            

          </form>

        </div>
    </div>
  );
}

export default App;
