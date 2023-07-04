import React, { useState, useEffect } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { img_500, unavailable, unavailableLandscape } from "./Config";
import Button from "@mui/material/Button";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Carousel from "./Carousel";
import "./ContentModal.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  width: "90%",
  height: "80%",
  backgroundColor: "#39445a",

  borderRadius: 10,
  color: "white",
  // boxShadow: theme.shadows[5],
  // padding: theme.spacing(1, 1, 3),
};

export default function ContentModal({ children, media_type, id }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [video, setVideo] = useState();
  const [content, setContent] = useState();

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}?api_key=793c34bba55ce0cf198efa609e196607&language=en-US`
    );

    setContent(data);
    // console.log(data);
  };

  const fetchVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=793c34bba55ce0cf198efa609e196607&language=en-US`
    );

    setVideo(data.results[0]?.key);
  };
  useEffect(() => {
    fetchData();
    fetchVideo();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div
        className="media style"
        style={{ cursor: "pointer" }}
        color="inherit"
        onClick={handleOpen}
      >
        {children}
        </div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              {content && (
                <div className={style}>
                  <div className="ContentModal">
                    <img
                      src={
                        content.poster_path
                          ? `${img_500}/${content.poster_path}`
                          : unavailable
                      }
                      alt={content.name || content.title}
                      className="ContentModal__portrait"
                    />
                    <img
                      src={
                        content.backdrop_path
                          ? `${img_500}/${content.backdrop_path}`
                          : unavailableLandscape
                      }
                      alt={content.name || content.title}
                      className="ContentModal__landscape"
                    />
                    <div className="ContentModal__about">
                      <span className="ContentModal__title">
                        {content.name || content.title} (
                        {(
                          content.first_air_date ||
                          content.release_date ||
                          "-----"
                        ).substring(0, 4)}
                        )
                      </span>
                      {content.tagline && (
                        <i className="tagline">{content.tagline}</i>
                      )}

                      <span className="ContentModal__description">
                        {content.overview}
                      </span>

                      <div>
                        <Carousel id={id} media_type={media_type} />
                      </div>

                      <Button
                        variant="contained"
                        startIcon={<YouTubeIcon />}
                        color="secondary"
                        target="__blank"
                        href={`https://www.youtube.com/watch?v=${video}`}
                      >
                        Watch the Trailer
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </Box>
          </Fade>
        </Modal>
      
    </>
  );
}
