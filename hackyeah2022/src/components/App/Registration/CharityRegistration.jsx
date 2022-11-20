import React, {useState} from 'react';
import './CharityRegistrationPage.css'


const apiLink = 'https://donatenow-hackyeah.azurewebsites.net';

export const OrganizationRegistration = () => {

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
    const [phoneNumber, setPhoneNumber] = React.useState(null);
    const [image,setImage] = React.useState(null);
    const [accountType, setAccountType] = React.useState();



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
    const handleSetPhoneNumber=(event)=>{
        setPhoneNumber(event.target.event);
    }
    const handleImage=(event)=>{
        setImage(event.target.files[0])
    }
    const handleAccountType=(event)=>{
        setAccountType(event.target.value)
    }

    const handleSubmitButton=(event)=>{
        

        let bodyJSON = JSON.stringify({
            "firstName":representativeName,
            "lastName":representativeSurname,
            "organizationName":name,
            "username":email,
            "password":password,
            "city":city,
            "voivodship":voivodship,
            "street":street,
            "houseNumber":houseNumber,
            "flatNumber":flatNumber,
            "postalCode":postalCode,
            "additionalShippingInformation":additionalShippingInfo,
            "packageMachineNumber":lockerId,
            "description":description,
            "taxIdentificationNumber":taxIdentificationNumber,
            "phoneNumber": phoneNumber,
            "image":image
        });

        console.log(bodyJSON);

        let headers = new Headers();

        var formData = new FormData();
        let bodyBlob = new Blob([bodyJSON], {type: "application/json"});

        formData.append("request",bodyBlob);
        //formData.append("image",image)

        const requestOptions = {
            method: 'POST',
            headers: headers,
            body: formData,
            redirect: 'follow'
          };

          const postRequest = fetch(`${apiLink}/admin/organizations/register`, requestOptions).then(response => response.text())
       .then(result => console.log(result))
       .catch(error => console.log('error', error));
          
         //const postRequest = fetch(`${apiLink}/charity-registration`, requestOptions).then(response => response.text())
         //.then(result => console.log(result))
         //.catch(error => console.log('error', error));

         event.preventDefault();

    }

    return (
        <div>
        <div className="center_container">
            <h1>Registration of an organization</h1>
        </div>    
        <br/>
        <br/>

        
        <div className="center_container">
            <form className="form_field">
                <div className="name ">
                    <label>Organization name</label>
                    <br/>
                    <br/>
                    <input id="name" className="text_input" onChange={handleSetName}/>
                </div>
                
                
                <div className="email">
                    <label>Organization email</label>
                    <br/>
                    <br/>
                    <input id="email" className="text_input" onChange={handleSetEmail}/>
                </div>
                
                
                <div className="representative_name">
                    <label>Organization representative name</label>
                    <br/>
                    <br/>
                    <input id="representative_name" className="text_input" onChange={handleRepresentativeName}/>
                </div>
                
                
                <div className="representative_surname">
                     <label>Organization representative surname</label>
                     <br/>
                     <br/>
                     <input id="representative_surname" className="text_input" onChange={handleRepresentativeSurname}/>
                </div>
               
                
                <div className="phone_number">
                    <label>Phone number</label>
                    <br/>
                    <br/>
                    <input id="phone_number" className="text_input" onChange={handleSetPhoneNumber}/>
                </div>
                
                
                <div className="password">
                    <label>Password</label>
                    <br/>
                    <br/>
                    <input id="password" className="text_input" type="password" onChange={handleSetPassword}/>
                </div>
                
                
                <div className="voivodship">
                    <label>Voivodship</label>
                    <br/>
                    <br/>
                    <input id="voivodship" className="text_input" onChange={handleSetVoivodship}/>
                </div>
                
                
                <div className="city">
                    <label>City</label>
                    <br/>
                    <br/>
                    <input id="city" className="text_input" onChange={handleSetCity}/>
                </div>
               
                
                <div  className="street">
                    <label>Street</label>
                    <br/>
                    <br/>
                    <input id="street" className="text_input" onChange={handleSetStreet}/>
                </div>
                
                <div className="house_number">
                    <label>House number</label>
                    <br/>
                    <br/>
                    <input id="house_number" className="text_input" onChange={handleSetHouseNumber}/>
                </div>
                
                
                <div className="flat_number">
                    <label>Flat number</label>
                    <br/>
                    <br/>
                    <input id="house_number" className="text_input" onChange={handleSetFlatNumber}/>
                </div>
                
                
                <div className="postal_code">
                    <label>Postal code</label>
                    <br/>
                    <br/>
                    <input id="postal_code" className="text_input" onChange={handleSetPostalCode}/>
                </div>

               
                
                <div className="locker_id" >
                    <label>Package machine number</label>
                    <br/>
                    <br/>
                    <input id="locker_id" className="text_input" onChange={handleSetLockerId}/>
                </div>
                
                
                <div className="tax_identification_number">
                    <label>Tax identification number</label>
                    <br/>
                    <br/>
                    <input id="tax_identification_number" className="text_input" onChange={handleSetTaxIdentificationNumber}/>
                </div>
                
                <div className="additional_shipping_info">
                    <label>Additional shipping information</label>
                    <br/>
                    <br/>
                    <input id="additional_shipping_info" className="text_input" onChange={handleSetAdditionalShippingInfo}/>
                </div>

                <div className="handle_image">
                    <label>Image</label>
                    <br/>
                    <br/>
                    <input id="handle_image" className="text_input" type="file" accept="image/*" onChange={handleImage}/>
                </div>
                <div className="center_container">
                    <br/>
                    <br/>

                    <label>Type of an organization</label>
                    <div>
                        <select onChange={handleAccountType}>
                            <option value="ECO_MARKET">Ecological organization</option>
                            <option value="CHARITY_MARKET">Charity organization</option>
                        </select>

                    </div>
                   

                </div>

            </form>

            <br/>
            <br/>

            <div className="charity_description">
                    <label >Description of the organization</label>
                    <br/>
                    <div>
                        <textarea id="description" className="text_input" onChange={handleSetDescription}/>
                    </div>
                </div>

                <br/>
                <br/>

            <div>
                <button id="submit_button" onClick={handleSubmitButton}>Submit</button>
            </div>



            </div>
            
        </div>
    );


};