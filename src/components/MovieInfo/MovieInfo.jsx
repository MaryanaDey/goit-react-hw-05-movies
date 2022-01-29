import PropTypes from "prop-types";
import {
    Container,
    DataBlock,
    PosterThumb,
    Poster,
    DataContainer,
    Text,
    GenresList,
    GenresListItem,
    GenreTitle,
  } from "./MovieInfo.styled";
  import { SubTitle, Title } from "../../App.styled";

export default function MovieInfo() {
    const {
        original_title,
        overview,
        poster_path,
        release_date,
        vote_average,
        genres,
      } = movieData;

    return (
        <>
       MovieInfo
        </>
    )
}

MovieInfo.propType = {
    movieData: PropTypes.array.isRequired,
  };