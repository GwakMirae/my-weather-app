import {useEffect, useState} from "react";
import CityList from "../components/CityList";

function Cities(){
    
    const API_URL = "http://riotkr.mockable.io/weather-crawlers/cities"
    
    const [cityState, setCityState] = useState([]); // 기본값 빈배열
    
    // hooks
    useEffect(() => {
        console.log('cities component mounted!');
        getCities();
    }, []); //once 
    // 빈배열을 넣어야 마운트됐을때 한번만 호출

    async function getCities() { // 동기적 처리
        const cities = await fetch(API_URL).then((res) => res.json());
        console.log(cities);

        setCityState(cities);
    }

    return (
        <div>
            <h1>Cities</h1>
            <p>{API_URL}</p>  
            <CityList cities={cityState} />
        </div>
    );
}

export default Cities;