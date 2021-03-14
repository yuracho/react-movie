import React from "react";
import Numeral from "numeral";
import { AiFillCaretUp, AiFillCaretDown, AiOutlineDash } from "react-icons/ai";

const MovieItem = ({ movie, onOver }) => {
  return (
    <tr onMouseOver={() => onOver(movie.rank)}>
      <td>{movie.rank}</td>
      <td>{movie.movieNm}</td>
      <td>{Numeral(movie.salesAmt).format(0, 0)}원</td>
      <td>{Numeral(movie.audiCnt).format(0, 0)}명</td>
      <td>
        <span style={{ fontSize: 18, color: "#F00" }}>
          {movie.rankInten > 0 && <AiFillCaretUp />}
        </span>
        <span style={{ fontSize: 18, color: "blue" }}>
          {movie.rankInten < 0 && <AiFillCaretDown />}
        </span>
        <span style={{ fontSize: 18, color: "darkgreen" }}>
          {movie.rankInten === 0 && <AiOutlineDash />}
        </span>
        {movie.rankInten}
      </td>
    </tr>
  );
};

export default MovieItem;
