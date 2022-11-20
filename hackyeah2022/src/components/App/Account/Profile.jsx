import {useAuth} from "../../Authentication/AuthProvider";
import {useEffect, useState} from "react";
import { Footer } from "../Footer/Footer";
import { ProfileInfo } from "./ProfileInfo";
import './styles.css'
import { AuctionChart } from "./AuctionChart";

export const Profile = () => {

    const {apiLink, token} = useAuth()
    const [data, setData] = useState()

    async function fetchAccount() {
        await fetch(`${apiLink}/stats/market`, {
            method: 'GET',
            headers: {
                'authorization': token,
            },
        }).then((response) => {
            response = response.json().then((r)=>{
                setData(r)
                console.log(data)
            })
        })
    }

    useEffect(() => {
        fetchAccount().then(r => console.log())
        console.log(data)
    },
        []
    )

    if (data) {
        return (<>
            <div className='profilePage'>
                <ProfileInfo data={data}/>
                <div className='chartContainer'>
                    <AuctionChart data={data}/>
                </div>
            </div>
            <Footer/>
        </>)} else{
        return(
            <>
            </>
        )

    }
    }