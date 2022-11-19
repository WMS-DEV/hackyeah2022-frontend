import React, {useState} from 'react';
import './CharityRegistrationPage.css'


export const CharityRegistration = () => {

    const [name, setName] = React.useState();
    const [email, setEmail] = React.useState();
    const [password, setPassword] = React.useState();
    const [city, setCity] = React.useState();
    const [voivodship, setVoivodship] = React.useState();
    const [address, setAddress] = React.useState();
    const [lockerId, setLockerId] = React.useState();


    const handleSetName=(event)=>{
        setName(event.target.value);
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
    const handleSetAddress=(event)=>{
        setAddress(event.target.value);
    }
    const handleSetLockerId=(event)=>{
        setLockerId(event.target.value);
    }

    return (
        <div>
            <h>Registration of charity organization</h>
            <div className="form_field">
                <label>Charity name</label>
                <br/>
                <input id="name" class="text_input" onChange={(event)=>handleSetName(event.target.value)}/>
                <br/>
                <label>Charity email</label>
                <br/>
                <input id="email" class="text_input" onChange={(event)=>handleSetEmail(event.target.value)}/>
                <label>Password</label>
                <br/>
                <input id="password" class="text_input" type="password" onChange={(event)=>handleSetPassword(event.target.value)}/>
                <label>Voivodship</label>
                <br/>
                <input id="voivodship" class="text_input" onChange={(event)=>handleSetVoivodship(event.target.value)}/>
                <label>City</label>
                <br/>
                <input id="city" class="text_input" onChange={(event)=>handleSetCity(event.target.value)}/>
                <label>Address (Street, postal code)</label>
                <br/>
                <input id="address" class="text_input" onChange={(event)=>handleSetAddress(event.target.value)}/>
                <label>Locker id</label>
                <br/>
                <input id="locker_id" class="text_input" onChange={(event)=>handleSetLockerId(event.target.value)}/>
            </div>

            <div id="form_field">
                <button id="submit_button">Submit</button>
            </div>






        </div>





    );


};