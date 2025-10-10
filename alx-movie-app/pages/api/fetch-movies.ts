import { MoviesProps } from "@/interfaces";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler (request: NextApiRequest, response: NextApiResponse) {
  if (request.method === "POST") {
    const { year, page, genre } = request.body;
    const date = new Date();
    const genreQuery = genre ? `&genre=${genre}` : '';

    const url = `https://moviesdatabase.p.rapidapi.com/titles?year=${year || date.getFullYear()}&sort=year.decr&limit=12&page=${page}${genreQuery}`;

    try {
      const resp = await fetch(url, {
        headers: {
          "x-rapidapi-host": "moviesdatabase.p.rapidapi.com",
          "x-rapidapi-key": `${process.env.MOVIE_API_KEY}`,
        },
      });

      if (!resp.ok) {
        const errorData = await resp.text();
        throw new Error(`Failed to fetch movies: ${resp.status} ${errorData}`);
      }

      const moviesResponse = await resp.json();
      const movies: MoviesProps[] = moviesResponse.results;

      return response.status(200).json({
        movies,
      });
    } catch (error) {
      console.error(error);
      return response.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    response.setHeader('Allow', ['POST']);
    response.status(405).end(`Method ${request.method} Not Allowed`);
  }
};