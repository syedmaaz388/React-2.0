import React, { useEffect, useState } from "react";
const AppContext = React.createContext();
const API_URL = `https://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_API_KEY}`;

const AppProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const [isError, setIsError] = useState({ show: false, msg: "" });
    const [query,setQuery] = useState("")

    const getMovies = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            if (data.Response === "True") {
                setIsLoading(false);
                setMovie(data.Search);
            } else {
                setIsError({
                    show: true,
                    msg: data.Error,
                });
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
       let timerOut =  setTimeout(() => {
            if (query.trim() !== "") {
                setIsLoading(true);
                getMovies(`${API_URL}&s=${query}`);
            } else {
                setMovie([]);
            }
        },2000)

        return () => clearTimeout(timerOut)
       
    }, [query]);

    return (
        <AppContext.Provider value={{ isLoading, movie, isError,setQuery,query }}>
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };
