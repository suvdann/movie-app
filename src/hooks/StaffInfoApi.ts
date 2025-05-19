import axios from "axios";

export const getstaffInfo = async (id: string) => {
  const result = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjdkOGJlYmQwZjRmZjM0NWY2NTA1Yzk5ZTlkMDI4OSIsIm5iZiI6MTc0MjE3NTA4OS4zODksInN1YiI6IjY3ZDc3YjcxODVkMTM5MjFiNTAxNDE1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KxFMnZppBdHUSz_zB4p9A_gRD16I_R6OX1oiEe0LbE8`
      }
    }
  );

  const crew = result.data.crew;
  const cast = result.data.cast;

  const director = crew.find((person: any) => person.job === "Director")?.name;
  const writers = crew
    .filter((person: any) => person.job === "Writer" || person.department === "Writing")
    .map((writer: any) => writer.name);
  const stars = cast.slice(0, 5).map((actor: any) => actor.name); // эхний 5 жүжигчин

  return { director, writers, stars };
};
