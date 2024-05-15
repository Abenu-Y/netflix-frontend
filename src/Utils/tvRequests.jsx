const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
const requests =[

    {title:'UpComing',         fetchUrl:`/movie/upcoming?&with_networks=213`,},
    {title:'Airing Today',     fetchUrl:`/tv/airing_today?&language=en-US`},
    {title:'Reality',          fetchUrl:`/discover/tv?&with_genres=10764`,},
    {title:'Crime',          fetchUrl:`/discover/tv?&with_genres=80`,},
    {title:'News',          fetchUrl:`/discover/tv?&with_genres=10763`,},
    {title:'Talk',          fetchUrl:`/discover/tv?&with_genres=10767`,},
    {title:'War & Politics',          fetchUrl:`/discover/tv?&with_genres=10768`,},
    {title:'Popular Tv-Shows', fetchUrl:`/tv/popular?&language=en-US`},
    {title:'Top Rated Tv-Shows', fetchUrl:`/tv/top_rated?&language=en-US`},
    {title:'Family',           fetchUrl:`/discover/movie?&with_genres=10751`} , 
    {title:'Documentaries',    fetchUrl:`/discover/movie?&with_genres=99`},
    {title:'History',          fetchUrl:`/discover/movie?&with_genres=14`},
    {title:'Tv Shows',         fetchUrl:`/trending/tv/day?&language=en-US`, },

]


export default requests;