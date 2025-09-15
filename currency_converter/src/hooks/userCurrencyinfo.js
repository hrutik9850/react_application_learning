import { use } from "react";
import { useEffect,useState } from "react";
 
function UserCurrencyinfo( currency) {
    const [data , setDate] = useState({})
       const API_KEY = "fff7dccefd6558404ea675ce";  // Replace with your real API key
        const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${currency}`;
    useEffect(() =>{//code to fetch the data from the api
        fetch(url)
        .then(res => res.json())
        .then(data => setDate(data.conversion_rates))
        .then(data => console.log(data))// setDate(data.conversion_rates)
        .catch(err => console.error("Error fetching currency data:", err));
    },[currency])//whenever the currency changes the useEffect will run again
    console.log(data)
    return data

}
export default UserCurrencyinfo