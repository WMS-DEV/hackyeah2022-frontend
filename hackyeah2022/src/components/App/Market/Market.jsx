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
    const [allCategoriesInactive, setAllCategoriesInactive] = React.useState(false);
    const { apiLink, token } = useAuth();

    debugger;

    console.log('x');

    const handleButtonClick = (event) => {
        setPageNumber(x => 0);
        setItems(x => []);
        setHasMore(x => true);
        setPageSize(x => 9);
        const buttonId = event.target.id;
        const indexOfCurCategory = categories.indexOf(categories.find(category => category.id.toString() === buttonId));
        setCategories(categories =>
            categories.map(obj => {
                if (obj.id.toString() === buttonId) {
                    if (categories[indexOfCurCategory].active) {
                        return {...obj, active: false};
                    }
                    return {...obj, active: true};
                }
                return obj;
            }),
        );
    }

    useEffect(() => {
        const fetchCategories = async () => {
            const data = await fetch(`${apiLink}/categories`, {headers: {'authorization': token}})
                .then(response => response.json());
            const categories = data.map(category => {
                category.active = true;
                return category;
            });
            setCategories(categories);
            console.log(categories);
        }
        fetchCategories().catch(console.error);
        ;
    }, []);

    const handleItemsFetching = () => {
        let fetchItems;
        if (categories && categories.filter(category => category.active === true).length > 0) {
            fetchItems = async () => {
                const categoriesAsParam = categories.filter(category => category.active === true).map(category => `categoryIds=${category.id}`).join('&');
                const data = await fetch(`${apiLink}/auctions?${categoriesAsParam}&pageNumber=${pageNumber}&pageSize=${pageSize}&status=LISTED`, {headers: {'authorization': token}})
                    .then(response => response.json());
                if (Math.floor(data.totalNumberOfFiltItems / pageSize) - 1 === pageNumber) {
                    setPageSize(cur => data.totalNumberOfFilteredItems % pageSize);
                    setNextHasMoreWillBeFalse(cur => true);
                }
                if (nextHasMoreWillBeFalse)
                    setHasMore(x => false);
                
                setPageNumber(x => x + 1);
                setItems(cur => cur === [] ? data.items : cur.concat(data.items));
                setNumberOfItems(x => data.totalNumberOfFilteredItems);
                setAllCategoriesInactive(x => false);
                console.log(data.totalNumberOfFilteredItems);
            }
            fetchItems().catch(console.error);
        } else {
            setItems([]);
            if (categories) {
                setAllCategoriesInactive(x => true);
            }
        }
    }

    useEffect(() => {
        handleItemsFetching();
    }, [categories ? categories.filter(category => category.active === true).length : 0]);

    if(categories !== null && categories.length === 0){
        return(
            <>
            <div className="account_with_category_container">
                <div className="tile account_with_no_categories_message">
                    Wybierz przynajmniej jedną kategorię z powyższych, aby zobaczyć dostępne pzedmioty
                </div>
            </div>
            </>
        )
    } else if (!categories || (!allCategoriesInactive && !items)) {
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
                        {categories.map(cur => (<button key={cur.id} id={cur.id} onClick={handleButtonClick}
                                                   className={cur.active ? 'active' : 'inactive'}>{cur.description}</button>))}
                    </div>
                    <div className="items">
                        {allCategoriesInactive
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
        );
    }
}

//<Footer/>