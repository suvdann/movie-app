
import axios from "axios"

export const getMovieDetails=async(movieId:string)=>{
   const result= await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, {
    headers:{
    'Content-Type':"application/json",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjdkOGJlYmQwZjRmZjM0NWY2NTA1Yzk5ZTlkMDI4OSIsIm5iZiI6MTc0MjE3NTA4OS4zODksInN1YiI6IjY3ZDc3YjcxODVkMTM5MjFiNTAxNDE1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KxFMnZppBdHUSz_zB4p9A_gRD16I_R6OX1oiEe0LbE8 `
    },
   });
   console.log(result.data)
   return result?.data;
}