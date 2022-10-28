import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
import Typography from "@mui/material/Typography";

const GameCard = () => {
  return (
    <Card sx={{ width: 250, height: 350, marginBottom: 10 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://images.g2a.com/323x433/1x1x0/mount-blade-ii-bannerlord-steam-key-global/5e3a7ade46177c1e96170ba2"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default GameCard;
