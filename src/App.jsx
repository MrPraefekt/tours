import Loading from "./components/Loading.jsx";
import {useEffect, useState} from "react";
import Tours from "./components/Tours.jsx";

const url = 'https://www.course-api.com/react-tours-project';

const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [locations, setLocations] = useState([]);
    const getLocations = async () => {
        const resp = await fetch(url);
        const loc = await resp.json();
        setLocations(loc);
        setIsLoading(false);
        console.log(loc);
    }
    useEffect(() => {
        getLocations();
    }, []);
    if (isLoading) {
        return <Loading/>;
    }
    return <>
        <h2>Tours Starter</h2>
        <Tours locations={locations} setLocations={setLocations}></Tours>
        {locations.length === 0 ? <button className='btn' onClick={getLocations}>Refresh</button>: null}
    </>
};
export default App;
