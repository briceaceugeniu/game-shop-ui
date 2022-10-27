import React from "react";
import Container from "@mui/material/Container";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

// https://react-slick.neostack.com/

const Carousel = () => {
  let navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    sx: { p: "3px" },
  };

  const bgImg =
    "https://vignette.wikia.nocookie.net/playstation/images/5/50/Wiki-background/revision/latest/scale-to-width-down/2000?cb=20170526183834";

  const imgs = [
    {
      id: 1,
      name: "Mount & Blade II: Bannerlord",
      src: "https://images.g2a.com/323x433/1x1x0/mount-blade-ii-bannerlord-steam-key-global/5e3a7ade46177c1e96170ba2",
    },
    {
      id: 2,
      name: "Tomb Raider",
      src: "https://images.g2a.com/1024x768/1x1x0/tomb-raider-steam-key-global-i10000000008012/590e5114ae653af70d168bb8",
    },
    {
      id: 3,
      name: "Marvel's Spider-Man Remastered",
      src: "https://images.g2a.com/1024x768/1x1x0/marvels-spider-man-remastered-pc-steam-key-global-i10000302546004/7e4252006f11418bae232b83",
    },
    {
      id: 4,
      name: "Horizon Zero Dawn | Complete Edition",
      src: "https://images.g2a.com/1024x768/1x1x0/horizon-zero-dawn-complete-edition-pc-steam-key-global-i10000145208006/5f02c6a57e696c6f690471f2",
    },
    {
      id: 5,
      name: "Conan Exiles",
      src: "https://images.g2a.com/1024x768/1x1x0/conan-exiles-steam-key-global-i10000033297006/59128dfa5bafe317117b4395",
    },
    {
      id: 6,
      name: "FIFA 23",
      src: "https://images.g2a.com/1024x768/1x1x0/fifa-23-pc-origin-key-global-i10000336532001/1e40646e865b43679642c6a0",
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ marginTop: "1.3em" }}>
      <Paper
        sx={{
          backgroundImage: `url(${bgImg})`,
          backgroundRepeat: "repeat",
          p: "5px",
        }}
      >
        <Slider {...settings}>
          {imgs.map((img) => {
            return (
              <Container key={img.id}>
                <img
                  src={img.src}
                  alt={img.name}
                  style={{
                    objectFit: "contain",
                    maxHeight: "300px",
                    margin: "auto",
                    cursor: "pointer",
                  }}
                  loading="lazy"
                  onClick={() => navigate(`/game/${img.id}`)}
                />
              </Container>
            );
          })}
        </Slider>
      </Paper>
    </Container>
  );
};

export default Carousel;
