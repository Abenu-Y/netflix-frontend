// const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
// const requests ={

//     fetchTrending:`/trending/movie/week?&language=en-US`,
//     fetchNetflixOriginals:`/discover/tv?&with_networks=213`,
//     fetchTopRatedMovies:`/movie/top_rated?&language=en-US`,
//     fetchActionMovies:`/discover/movie?&with_genres=28`,
//     fetchComedyMovies:`/discover/movie?&with_genres=35`,
//     fetchHorrorMovies:`/discover/movie?&with_genres=27`,
//     fetchRomaceMovies:`/discover/movie?&with_genres=10749`,  
//     fetchFamilyMovies:`/discover/movie?&with_genres=10751`,
//     fetchDocumentaries:`/discover/movie?&with_genres=99`,
//     fetchHistory:`/discover/movie?&with_genres=14`,
//     fetchTvShow:`/trending/tv/day?&language=en-US`,
//     fetchMystery:`/discover/movie?&with_genres=9648`,
  
// }

const requests = [

        {title:'Netflix Original', fetchUrl:`/discover/tv?&with_networks=213`,},
        {title:'Trending Now',    fetchUrl:`/trending/movie/week?&language=en-US`,   isLargeRow:true},
        {title:'Top Rated Movies', fetchUrl:`/discover/tv?&with_networks=213`,        isLargeRow:true},
        {title:'Action',           fetchUrl:`/discover/movie?&with_genres=28`,        isLargeRow:true},
        {title:'Comedy',           fetchUrl:`/discover/movie?&with_genres=35`,},
        {title:'Horror',           fetchUrl:`/discover/movie?&with_genres=27`,},
        {title:'Romance',          fetchUrl:`/discover/movie?&with_genres=10749`,     isLargeRow:true},
        {title:'Family',           fetchUrl:`/discover/movie?&with_genres=10751`,     isLargeRow:true} , 
        {title:'Documentaries',    fetchUrl:`/discover/movie?&with_genres=99`,        isLargeRow:true},
        {title:'History',          fetchUrl:`/discover/movie?&with_genres=14`,        isLargeRow:true},
        {title:'Tv Shows',         fetchUrl:`/trending/tv/day?&language=en-US`, },
        {title:'Mystery',          fetchUrl:`/discover/movie?&with_genres=9648`,},
        {title:'UpComing',         fetchUrl:`/movie/upcoming?&with_networks=213`,},
        {title:'Airing Today',     fetchUrl:`/tv/airing_today?&language=en-US`},
        {title:'Popular Tv-Shows', fetchUrl:`/tv/popular?&language=en-US`},
        {title:'Top Rated Tv-Shows', fetchUrl:`/tv/top_rated?&language=en-US`},
        {title:'Reality',          fetchUrl:`/discover/tv?&with_genres=10764`,},
        {title:'Crime',          fetchUrl:`/discover/tv?&with_genres=80`,},
        {title:'News',          fetchUrl:`/discover/tv?&with_genres=10763`,},
        {title:'Talk',          fetchUrl:`/discover/tv?&with_genres=10767`,},
        {title:'War & Politics',          fetchUrl:`/discover/tv?&with_genres=10768`,},
]


export default requests;