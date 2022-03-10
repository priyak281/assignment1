import * as React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
export default function MediaCard({ img, title, url }) {
  return (
    <div className="card">
      <img src={img} alt="hi" />
      <div className="card-body">
        <h2>{title}</h2>
        <p>Description</p>
        <Link to={`/player?url=${url}`}>
          <button
            style={{
              margin: "10px",
              color: "black",
              backgroundColor: "orange",
              height: "30px",
              width: "20%",
            }}
          >
            Play Video
          </button>
        </Link>
      </div>
    </div>
  );
}
