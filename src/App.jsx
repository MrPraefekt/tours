import Loading from "./components/Loading.jsx";
import { useEffect, useState } from "react";
import Tours from "./components/Tours.jsx";

const url = "https://www.course-api.com/react-tours-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const [locations, setLocations] = useState([]);
  const getLocations = async () => {
    setIsLoading(true);
    try {
      const resp = await fetch(url);
      const loc = await resp.json();
      setLocations(loc);
      setIsLoading(false);
      console.log(loc);
    } catch (e) {
      setIsError(true);
      console.log(e);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    getLocations();
  }, []);
  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (isError) {
    return (
      <main>
        <h2>An Error occurred</h2>
      </main>
    );
  }
  return (
    <>
      <main>
        <Tours locations={locations} setLocations={setLocations}></Tours>
        {locations.length === 0 ? (
          <button className="btn" onClick={getLocations}>
            Refresh
          </button>
        ) : null}
      </main>
    </>
  );
};
export default App;
