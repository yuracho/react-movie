import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Modal = ({ movie, onClose }) => {
  return (
    <div className="modal">
      <div className="bg" onClick={onClose}></div>
      <div className="popup">
        <h3> {movie.movieNm} </h3>
        <div>
          <img src={movie.thumbUrl} />
        </div>
        <strong>영화명: {movie.movieNm} </strong>
        <br />
        <strong>개봉일: {movie.openDt} </strong>
        <br />
        <strong>감독: {movie.director} </strong>
        <p className="more" onClick={onClose}>
          <AiOutlineCloseCircle />
        </p>
      </div>
    </div>
  );
};

export default Modal;
