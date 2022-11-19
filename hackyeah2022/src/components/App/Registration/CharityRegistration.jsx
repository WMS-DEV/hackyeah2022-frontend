import React, {useState} from 'react';
import './CharityRegistrationPage.css'


export const CharityRegistration = () => {

    const [name, setName] = React.useState(null);
    const [email, setEmail] = React.useState(null);
    const [representativeName, setRepresentativeName] = React.useState();
    const [representativeSurname, setRepresentativeSurname] = React.useState();
    const [password, setPassword] = React.useState(null);
    const [city, setCity] = React.useState(null);
    const [voivodship, setVoivodship] = React.useState(null);
    const [street, setStreet] = React.useState(null);
    const [houseNumber, setHouseNumber] = React.useState(null);
    const [flatNumber, setFlatNumber] = React.useState(null);
    const [lockerId, setLockerId] = React.useState(null);
    const [description, setDescription] = React.useState(null);
    const [taxIdentificationNumber, setTaxIdentificationNumber] = React.useState(null);


    const handleSetName=(event)=>{
        setName(event.target.value);
    }
    const handleRepresentativeName=(event)=>{
        setRepresentativeName(event.target.value);
    }
    const handleRepresentativeSurname=(event)=>{
        setRepresentativeSurname(event.target.value);
    }

    const handleSetEmail=(event)=>{
        setEmail(event.target.value);
    }

    const handleSetPassword=(event)=>{
        setPassword(event.target.value);
    }
    const handleSetCity=(event)=>{
        setCity(event.target.value);
    }
    const handleSetVoivodship=(event)=>{
        setVoivodship(event.target.value);
    }
    const handleSetStreet=(event)=>{
        setStreet(event.target.value);
    }
    const handleSetLockerId=(event)=>{
        setLockerId(event.target.value);
    }
    const handleSetDescription=(event)=>{
        setDescription(event.target.value);
    }
    const handleSetTaxIdentificationNumber=(event)=>{
        setTaxIdentificationNumber(event.target.value);
    }

    const handleSubmitButton=(event)=>{
        

        let bodyJSON = JSON.stringify({
            "first_name":representativeName,
            "last_name":representativeSurname,
            "organization_name":name,
            "username":email,
            "password":password,
            "city":city,
            "voivodship":voivodship,
            "street":street,
            "lockerId":lockerId,
            "description":description
        });

        console.log(bodyJSON);

        let headers = new Headers();

        const requestOptions = {
            method: 'POST',
            headers: headers,
            body: bodyJSON,
            redirect: 'follow'
          };

          
         //const postRequest = fetch(`${apiLink}/charity-registration`, requestOptions).then(response => response.text())
         //.then(result => console.log(result))
         //.catch(error => console.log('error', error));

         event.preventDefault();

    }

    return (
        <div>
            <h1 className="form_field">Registration of charity organization</h1>
            <form className="form_field">
                <label>Charity name</label>
                <input id="name" className="text_input" onChange={handleSetName}/>
                <br/>
                <br/>
                <label>Charity email</label>
                <input id="email" className="text_input" onChange={handleSetEmail}/>
                <br/>
                <br/>
                <label>Password</label>
                <input id="password" className="text_input" type="password" onChange={handleSetPassword}/>
                <br/>
                <br/>
                <label>Voivodship</label>
                <input id="voivodship" className="text_input" onChange={handleSetVoivodship}/>
                <br/>
                <br/>
                <label>City</label>
                <input id="city" className="text_input" onChange={handleSetCity}/>
                <br/>
                <br/>
                <label>Street</label>
                <input id="street" className="text_input" onChange={handleSetStreet}/>
                <br/>
                <br/>
                <label>Locker id</label>
                <input id="locker_id" className="text_input" onChange={handleSetLockerId}/>
                <br/>
                <br/>
                <label>Tax identification number</label>
                <input id="tax_identification_number" className="text_input" onChange={handleSetTaxIdentificationNumber}/>
                <br/>
                <br/>
                <label>Charity Description</label>
                <div>
                    <textarea id="description" className="text_input" onChange={handleSetDescription}/>
                </div>
                
                <br/>
            </form>

            <div className="form_field">
                <button id="submit_button" onClick={handleSubmitButton}>Submit</button>
            </div>






        </div>





    );


};