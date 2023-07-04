import React from "react";
import "./SingleContent.css";
import { img_300,unavailable } from "./Config";
import Badge from '@mui/material/Badge';
import ContentModal from "./ContentModal"


function SingleContent({ id, poster, media_type, title, date, vote_average }) {
  return (
    <ContentModal media_type={media_type} id={id}>
          <Badge badgeContent={vote_average} color={vote_average>7 ? "primary":"secondary"}>
       
      </Badge>
      <img
        className="poster"
        src={poster ? `${img_300}${poster}` : unavailable}
        alt={title}
      />
      <b className="title">{title}</b>
      <span className="subTitle">
        {media_type === "tv" ? "TV Series" : "Movie"}
        <span className="subTitle">{date}</span>
      </span>
      </ContentModal>
  );
}

export default SingleContent;
