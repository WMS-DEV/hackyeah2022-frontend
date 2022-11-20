import React, {useState, useEffect} from 'react';
import './CreateItem.css'
import {useAuth} from "../../../Authentication/AuthProvider";


const apiLink = 'https://donatenow-hackyeah.azurewebsites.net';


export const CreateItem = () => {
    /*
    <button id="market_button" value="MARKET" onClick={handleAddMarket}>Charity organizations</button>
    <button id="charity_market_button" value="CHARITY_MARKET" onClick={handleAddMarket}>Charity organizations</button>
    <button id="eco_market_button" value="ECO_MARKET" onClick={handleAddMarket}>Eco organizations</button>
    */
    const [title, setTitle] = React.useState(null);
    const [location, setLocation] = React.useState();
    const [categories, setCategories] = React.useState([]);
    const [allowedShippingTypes, setAllowedShippingTypes] = React.useState([]);
    const [selectedCategory, setSelectedCategory] = React.useState(null);
    const [image, setImage] = React.useState(null);
    const [markets, setMarkets] = React.useState(null);
    const [description, setDescription] = React.useState(null);

    const { token } = useAuth();
    
    useEffect(() => {
        const fetchCategories = async () => {
            const data = await fetch(`${apiLink}/categories`, {headers: {'authorization': token}})
            .then(response => response.json())
            setCategories(data);
            console.log(categories);
        }
        fetchCategories().catch(console.error);;
    }, []); 
    


    const handleSetTitle=(event)=>{
        setTitle(event.target.value);
    }
    const handleSetLocation=(event)=>{
        setLocation(event.target.value);
    }
    const handleAllowedShippingTypes=(event)=>{
        //console.log(event.target.checked);
        if(event.target.checked==true){
            if(allowedShippingTypes.indexOf(event.target.id)<0){
                let newAllowedShippingTypes = allowedShippingTypes.concat(event.target.id);
                setAllowedShippingTypes(newAllowedShippingTypes);
            }
        }
        if(event.target.checked==false){
            if(allowedShippingTypes.indexOf(event.target.id)>-1){
                let newAllowedShippingTypes = allowedShippingTypes.filter(type=> type!=event.target.id);
                setAllowedShippingTypes(newAllowedShippingTypes);
            }
        }
        console.log(allowedShippingTypes);
    }
    const handleSelectedCategory=(event)=>{
        setSelectedCategory(event.target.value);
    }
    const handleLoadImage=(event)=>{
        setImage(event.target.files[0]);
        console.log(image);
    }
    const  handleRemoveMarkets = (event) =>{
        console.log(event);

        let newMarket = markets.filter(market => market!=event.target.value);
        setMarkets(newMarket);
        console.log(markets);
    }
    const handleSetDescription=(event)=>{
        setDescription(event.target.value);
    }
    const handleAddMarket=(event)=>{

        if (markets.indexOf(event.target.value)<0)
        {
            const newMarket = markets.concat(event.target.value);
            ///markets.push(event.target.value);
            setMarkets(newMarket);
        }
        console.log(markets);
        event.preventDefault();

    }

    const handleSubmitButton=(event)=>{
        
        let bodyJSON = JSON.stringify({
            "title":title,
            "location":location,
            "description":description,
            "category": selectedCategory,
            "listedFor": markets,
            "image":image,
            "allowedShippingTypes":allowedShippingTypes
        });

        console.log(bodyJSON);

        let headers = new Headers();
        headers.append("Authorization",token)

        var formData = new FormData();
        let bodyBlob = new Blob([bodyJSON], {type: "application/json"});

        formData.append("request",bodyBlob);
        formData.append("image",image);

        const requestOptions = {
            method: 'POST',
            headers: headers,
            body: formData,
            redirect: 'follow'
          };

          const postRequest = fetch(`${apiLink}/auction`, requestOptions).then(response => response.text())
       .then(result => console.log(result))
       .catch(error => console.log('error', error));

    }

    const handleMarkets=(event)=>{
        setMarkets(event.target.value);
        event.preventDefault();
    }


    return (
        <div>
            <div className="create_item center_container">
                <h1>Put an item on auction!</h1>
            </div>

            <div className="center_container">
                <label>Title</label>
                <br/>
                <input type="text" className="text_input" onChange={handleSetTitle}></input>
                <br/>
                <label>Location</label>
                <br/>
                <input type="text" className="text_input" onChange={handleSetLocation}></input>
                <br/>
                <label>Categories</label>
                <br/>
                <input name="categories" list="categories" className="text_input" onChange={handleSelectedCategory} type="text"/>
                            <datalist name="categories" id="categories" className="text_input">
                            {categories.map(category => <option value={category}>{category}</option>)}
                            </datalist>
                <br/>
                <label>Photo</label>
                <input type="file" className="text_input" accept="image/*" onChange={handleLoadImage}></input>
                <br/>
                <br/>


                <label>Available shipment methods</label>
                <div className="form_field">
                    <br/>
                    <div className="in_line_containers checkboxgrid" >
                          <lo>Package machine</lo>
                          <input id="PACKAGE_MACHINE" name="shipment"type="checkbox" onClick={handleAllowedShippingTypes}></input>
                     </div>
                     <div className="in_line_containers checkboxgrid">
                         <lo>Courier</lo>
                       <input id="COURIER" name="shipment"type="checkbox" onClick={handleAllowedShippingTypes}></input>
                     </div>
                
                     <div className="in_line_containers checkboxgrid">
                        <lo>Pickup by seller</lo>
                        <input id="PICKUP_BY_SELLER" name="shipment"type="checkbox" onClick={handleAllowedShippingTypes}></input>
                </div>
                <div className="in_line_containers checkboxgrid">
                        <lo>Self delivery</lo>
                        <input id="SELF_DELIVERY" name="shipment"type="checkbox" onClick={handleAllowedShippingTypes}></input>
                </div>

                </div>
            
               
               <br/>
               <br/>

                


                <label>Who should be able to claim your item ?</label>
                <div className="center_container">
                <div className="in_line_containers">
                    <div>
                        <select onClick={handleMarkets}>
                            <option value="ECO_MARKET">Ecological organizations</option>
                            <option value="CHARITY_MARKET">Charity organizations</option>
                            <option value="MARKET">Everyone</option>
                        </select>

                    </div>
                   
                </div>
                </div>
                <label>Description</label>
                <br/>
                <div>
                        <textarea id="description" className="text_input" onChange={handleSetDescription}/>
                    </div>
                <br/>
                
                <br/>
                <div>
                    <button onClick={handleSubmitButton}>Submit</button>
                </div>

            </div>

            

        </div>






    );
}