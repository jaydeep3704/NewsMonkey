import React from "react";

const NewsItem=(props)=> {

    let { title, description, imageUrl, newsUrl, publishedAt, author,source } =props;
    let d = new Date(publishedAt);

    return (
      <div className="my-3">
        <div className="card ">
          <div style={
            {
              display:"flex",
              justifyContent:"flex-end",
              position:"absolute",
              right:"0"
            }
          }>
          <span className=" badge rounded-pill bg-danger">
            {source}
          </span>
          </div>
          <img
            src={
              !imageUrl
                ? "https://t3.ftcdn.net/jpg/03/27/55/60/360_F_327556002_99c7QmZmwocLwF7ywQ68ChZaBry1DbtD.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "unknown"} on {d.toGMTString()}{" "}
              </small>
            </p>
            <a
              href={newsUrl}
              className="btn btn-dark btn-sm"
              target="_blank"
              rel="noreferrer"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
