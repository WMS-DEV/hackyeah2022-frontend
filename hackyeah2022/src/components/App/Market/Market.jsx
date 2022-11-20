import React, {useState, useEffect} from 'react';
import { useAuth } from '../../Authentication/AuthProvider';
import InfiniteScroll from "react-infinite-scroll-component";
import {Item} from "./Item/Item.jsx";
import './Market.css'

export const Market = () => {
    const [items, setItems] = React.useState([]);
    const [categories, setCategories] = React.useState(null);
    const [numberOfItems, setNumberOfItems] = React.useState(null);
    const [pageSize, setPageSize] = React.useState(9);
    const [pageNumber, setPageNumber] = React.useState(0);
    const [hasMore, setHasMore] = React.useState(true);
    const [nextHasMoreWillBeFalse, setNextHasMoreWillBeFalse] = React.useState(false);
    const { apiLink, token } = useAuth();
    const [chosenCategory, setChosenCategory] = React.useState(null);

    const handleButtonClick = (event) => {
        setPageNumber(x => 0);
        setItems(x => []);
        setHasMore(x => true);
        setPageSize(x => 9);
        const buttonId = event.target.id;
        const indexOfCurCategory = parseInt(buttonId);

        setChosenCategory(x => categories[parseInt(event.target.id)].name);
/*
        setCategories(cur => 
            {cur.map((obj, index) => {
                if(index === parseInt(buttonId) && obj.active === true){
                    return {...obj, active: false};
                } else if(index === parseInt(buttonId) && obj.active === false){
                    return {...obj, active: true};
                } else if(obj.active) {
                    return {...obj, active: false};
                } 
            return obj;
            })}
        );
        */
    }
        
        /*
        setCategories(x =>
            x.map(obj => {
                if (obj.indexOfCurCategory === parseInt(buttonId)) {
                    if (x[indexOfCurCategory].active) {
                        return {...obj, active: false};
                    } else {
                        console.log(x);
                        debugger;
                    }
                    return {...obj, active: true};
                }
                return obj;
            }),
        );
        */

    useEffect(() => {
        const fetchCategories = async () => {
            const data = await fetch(`${apiLink}/categories`, {headers: {'authorization': token}})
                .then(response => response.json()).then(response => response.map(x => { return {name: x}}));
            /*
            const categories = data.map(category => {
                category.active = true;
                return category;
            });
            */
            setCategories(x => data);
        }
        fetchCategories().catch(console.error);
        ;
    }, []);

    const handleItemsFetching = () => {
        let fetchItems;
        console.log(chosenCategory);
        if (chosenCategory) {
            fetchItems = async () => {
                //const categoryParameter = categories.find(x => x.active).name;
                const data = await fetch(`${apiLink}/auctions?pageNumber=${pageNumber}&pageSize=${pageSize}&status=LISTED&category=${chosenCategory}`, {headers: {'authorization': token}})
                    .then(response => response.json());
                if (Math.floor(data.count / pageSize) - 1 === pageNumber) {
                    setPageSize(cur => data.count % pageSize);
                    setNextHasMoreWillBeFalse(cur => true);
                }
                if (nextHasMoreWillBeFalse)
                    setHasMore(x => false);
                
                setPageNumber(x => x + 1);
                setItems(cur => cur === [] ? data.result : cur.concat(data.result));
                setNumberOfItems(x => data.count);
                debugger;
                //setAllCategoriesInactive(x => false);
                console.log(data.count);
            }
            fetchItems().catch(console.error);
        } else {
            setItems([]);
            if (categories) {
                //setAllCategoriesInactive(x => true);
            }
        }
    }

    /*
    useEffect(() => {
        handleItemsFetching();
    }, [categories ? chosenCategory : 0]);
    */

    useEffect(() => {
        handleItemsFetching();
    }, [chosenCategory]);


    if(categories !== null && categories !== undefined && categories.length === 0){
        return (
            <>
            <div className="account_with_category_container">
                <div className="tile account_with_no_categories_message">
                    Wybierz przynajmniej jedną kategorię z powyższych, aby zobaczyć dostępne przedmioty
                </div>
            </div>
            </>
        );
    } else if (!categories || (chosenCategory && !items)) {
        return (
            <div id="centring_container">
                <div className="dots-4"></div>
            </div>
        )
    } else {
        return (
            <>
                <div id="items_container">
                    <div className="categories_container items_categories_container">
                        {categories.map((cur, index) => (<button key={index} id={index} onClick={handleButtonClick}
                                                   className={cur.name === chosenCategory ? 'active' : 'inactive'}>{cur.name}</button>))}
                    </div>
                    <div className="items">
                        {!chosenCategory
                            ? <div className="tile no_selected_categories_tip">
                                Żeby wyświetlić proponowane oferty, wybierz przynajmniej jedną z ról powyżej.
                            </div>
                            : <InfiniteScroll
                                dataLength={items.length}
                                next={handleItemsFetching}
                                hasMore={hasMore}
                                loader={<div id="infinite_loader">
                                    <div className="dots-4"></div>
                                </div>}>
                                {items.map(cur => (
                                    <Item key={cur.id} id={cur.id} name={cur.name} location={cur.location}
                                           startDate={cur.startDate} endDate={cur.endDate}
                                           maximumStake={cur.maximumStake} isNew={cur.isNew}
                                           requiredWorkers={cur.requiredWorkers}
                                           assignedWorkers={cur.assignedWorkers}/>))}
                            </InfiniteScroll>}
                    </div>
                </div>
            </>
        )
    }
}  

//<Footer/>