import React from 'react';
import { makeStyles,Card,CardActionArea,CardActions,CardContent,CardMedia,Button,Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles({
  root: {
    width: 350,
    padding: 10,
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 360,
  },
  media: {
    height: 180,
  },
});

export default function ScenarioCard({
  title,
  image,
  description,
  id,
  setContent,
}) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();

  const routeChange = () => {
    const path = `/conversation/${title}`;
    history.push(path);
  };
  const editScenario = () => setContent({ title, image, description });

  const deleteScenario = () => {
    dispatch(deleteScenario(title));
  };
  return (
    <Card className={classes.root}>
      <CardActionArea onClick={routeChange}>
        <CardMedia className={classes.media} image={image} />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2' noWrap={false}>
            {title}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button color='primary' variant='contained' onClick={editScenario}>
          Edit Scenario
        </Button>
        <Button
          variant='contained'
          onClick={deleteScenario}
          style={{ backgroundColor: 'red', color: 'white' }}
        >
          Delete Scenario
        </Button>
      </CardActions>
    </Card>
  );
}
