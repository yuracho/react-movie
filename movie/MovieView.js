import React from "react";

const MovieView = ({ movie, onOpen }) => {
  return (
    <div className="view" onClick={onOpen}>
      <img src={movie.thumbUrl} alt={movie.movieNm} />
      <div>
        <h3>{movie.movieNm}</h3>
        <ul>
          <li>
            <em>개봉일</em> {movie.openDt}
          </li>
          <li>
            <em>제작상태</em>
            {movie.moviePrdtStat}
          </li>
          <li>
            <em>영화구분</em>
            {movie.movieType}
          </li>
          <li>
            <em>관람등급</em>
            {movie.watchGradeNm}
          </li>
          <li>
            <em>상연시간</em>
            {movie.showTs}
          </li>
          <li>
            <em>제작국가</em> {movie.repNationCd}
          </li>
          <li>
            <em>감독</em>
            {movie.director}
          </li>
          <li>
            <em>장르</em>
            {movie.genre}
          </li>
          <li>
            <em>배급사</em>
            {movie.dtNm}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MovieView;
