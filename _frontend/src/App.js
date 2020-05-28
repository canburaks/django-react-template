import React from "react";
import { Route, Switch, Link } from "react-router-dom"

// import Apollo framework query hook
import { useQuery } from '@apollo/react-hooks'; // New

// import frontend queries we will define later
import { SAMPLE_QUERY } from "./query" //New

// import styling we will define later
//import "./App.css"


const SampleComponent = (props) => {
    const { loading, error, data } = useQuery(SAMPLE_QUERY)
 
    if (loading) return <div>Loading</div>
    if (error) return <div>Unexpected Error: {error.message}</div>
	console.log(data)
    return (
        <div className="movie-page">
            {data  && <p>{data.sample}</p>}
        </div>
    )
}

const App = () => {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/">
					<SampleComponent />
				</Route>
            </Switch>
        </div>
    )
}
export default App