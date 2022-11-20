import React, {useState, useEffect} from 'react';
import './CreateItem.css'
import {useAuth} from "../../../Authentication/AuthProvider";


const apiLink = 'https://donatenow-hackyeah.azurewebsites.net';


export const CreateItem = () => {

    const [title, setTitle] = React.useState(null);
    const [location, setLocation] = React.useState();
    const [categories, setCategories] = React.useState(null);
    const [allowedShippingTypes, setAllowedShippingTypes] = React.useState([]);
    const [selectedCategory, setSelectedCategory] = React.useState(null);

    const { token } = useAuth();

    useEffect(() => {
        const fetchRoles = async () => {
            const data = await fetch(`${apiLink}/categories`, {headers: {'authorization': token}})
            .then(response => response.json());
            const allCategories = data.map(category => {
                category.active = false;
                return category;
            });
            setCategories(allCategories);
            console.log(categories);
        }
        fetchRoles().catch(console.error);;
    }, []); 



    const handleSetTitle=(event)=>{
        setTitle(event.target.value);
    }
    const handleSetLocation=(event)=>{
        setLocation(event.target.value);
    }
    const handleAllowedShippingTypes=(event)=>{
        setAllowedShippingTypes(event.target.value);
    }
    const handleSelectedCategory=(event)=>{
        setSelectedCategory(event.target.value);
    }
    const handleAddNewCategory = (event) => {

        if(categories.filter(category=>!category.active).indexOf(event.target.value)<0){

            setCategories((()=> categories.map((category)=>category==event.target.value ? category.active=true : category)));
        }


        

    }





    return (
        <div>
            <div >
                <h1>Put an item on auction!</h1>
            </div>

            <div>
                <label>Title</label>
                <br/>
                <input type="text" className="text_input"></input>

                <label>Location</label>
                <br/>
                <input type="text" className="text_input"></input>

                <label>Categories</label>
                <input name="categories" list="categories" className="text_input" onChange={handleSelectedCategory} type="text"/>
                            <datalist name="categories" id="categories" className="text_input">
                                {categories.map(category => <option value={category}>{category}</option>)}
                            </datalist>

                    
            </div>

            

        </div>






    );
}