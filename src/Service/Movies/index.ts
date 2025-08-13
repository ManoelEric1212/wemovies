import apiClient from "../../Data/BaseApi";

export interface IMovies {
  id: number;
  title: string;
  price: number;
  image: string;
}
export interface MoviesResponse {
  products: IMovies[];
}

export class MoviesService {
  static async getMovies() {
    const { data } = await apiClient.get<MoviesResponse>("/movies");
    return data;
  }
}
