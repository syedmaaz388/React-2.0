import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Cards({curMovie}) {
  return (
    <Card sx={{ width: 345,marginTop:"1%",marginBottom:"1%" }}>
      <CardMedia
        sx={{ height: 140 }}
        image={curMovie.Poster}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {curMovie.Title}
        </Typography>
        <Typography>
        {curMovie.Year}

        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica  Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica  Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
      </CardContent>
      <CardActions>
        <Button size="small">link</Button>
      </CardActions>
    </Card>
  );
}
