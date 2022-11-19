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
    const [postalCode, setPostalCode] = React.useState(null);
    const [additionalShippingInfo, setadditionalShippingInfo] = React.useState(null);
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
    const handleSetLockerId=(event)=>{
        setLockerId(event.target.value);
    }
    const handleSetPostalCode=(event)=>{
        setPostalCode(event.target.value);
    }

    const handleSetAdditionalShippingInfo=(event)=>{
        setadditionalShippingInfo(event.target.value);
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
    const handleSetHouseNumber=(event)=>{
        setHouseNumber(event.target.value);
    }
    const handleSetFlatNumber=(event)=>{
        setFlatNumber(event.target.value);
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
            "house_number":houseNumber,
            "flat_number":flatNumber,
            "postal_code":postalCode,
            "additional_shipping_information":additionalShippingInfo,
            "package_machine_number":lockerId,
            "description":description,
            "tax_identification_number":taxIdentificationNumber
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
                <label>Charity representative name</label>
                <input id="representative_name" className="text_input" onChange={handleRepresentativeName}/>
                <br/>
                <br/>
                <label>Charity representative surname</label>
                <input id="representative_surname" className="text_input" onChange={handleRepresentativeSurname}/>
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
                <label>House number</label>
                <input id="house_number" className="text_input" onChange={handleSetHouseNumber}/>
                <br/>
                <br/>
                <label>Flat number</label>
                <input id="house_number" className="text_input" onChange={handleSetFlatNumber}/>
                <br/>
                <br/>
                <label>Postal code</label>
                <input id="postal_code" className="text_input" onChange={handleSetPostalCode}/>
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
                <label>Additional shipping information</label>
                <input id="additional_shipping_info" className="text_input" onChange={handleSetAdditionalShippingInfo}/>
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