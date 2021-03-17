import React, { memo, useState } from 'react';
import { Handle } from 'react-flow-renderer';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ChatIcon from '@material-ui/icons/Chat';
import CategoryIcon from '@material-ui/icons/Category';

const useStyles = makeStyles((theme) => ({
  input: {
    backgroundColor: 'white',
    borderRadius: '5px',
    padding: '5px',
    margin: 5,
    boxShadow: '0 0 5px',
    width: '220px',
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  node: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  card: {
    minWidth: 200,
    backgroundColor: '#e8eaf6',
    borderRadius: 5,
    padding: 5,
  },
  title: { fontSize: 18 },
  name: {
    borderRadius: 5,
  },
  icon: {
    marginRight: 20,
  },
  placeholder: {
    color: 'gray',
    opacity: '0.5',
    fontSize: 24,
  },
  intentIcon: {
    color: '#0091ea',
  },
  entityIcon: {
    color: '#ffd180',
  },
  speakIcon: {
    color: '#757575',
  },
}));

export default memo(({ data, id }) => {
  console.log(data);
  const classes = useStyles();
  return (
    <>
      <Handle
        type='target'
        position='left'
        style={{ backgroundColor: 'white', bottom: 0 }}
        onConnect={(params) => console.log('handle onConnect', params)}
      />
      <Card variant='outlined' className={classes.card}>
        <CardContent className={classes.node}>
          <div className={classes.name}>
            {data && data.name ? (
              <Typography
                variant='caption'
                display='block'
                gutterBottom
                className={classes.title}
                color='textSecondary'
                multiline
              >
                {data.name}
              </Typography>
            ) : (
              <Typography variant='h5'>Scenario name</Typography>
            )}
          </div>
          <div>
            {data && data.intent ? (
              <div className={classes.input}>
                <AccountCircleIcon
                  className={`${classes.icon} ${classes.intentIcon}`}
                />
                <Typography variant='caption'>Intent: {data.intent}</Typography>
              </div>
            ) : (
              <div className={classes.input}>
                <AccountCircleIcon className={classes.icon} />
                <Typography className={classes.placeholder}>
                  "Intent name"
                </Typography>
              </div>
            )}
            {data && data.entities.length > 0 ? (
              data.entities.map((entity) => {
                return (
                  <div className={classes.input}>
                    <CategoryIcon
                      className={`${classes.icon} ${classes.entityIcon}`}
                    />
                    <Typography variant='caption'>Entity: {entity}</Typography>
                  </div>
                );
              })
            ) : (
              <div className={`${classes.input}`}>
                <CategoryIcon className={classes.icon} />
                <Typography className={classes.placeholder}>
                  "Entity name"
                </Typography>
              </div>
            )}
            <div className={classes.speak}>
              {data && data.speak.length > 0 ? (
                data.speak.map((text) => {
                  return (
                    <div className={`${classes.input}`}>
                      <ChatIcon
                        className={`${classes.icon} ${classes.speakIcon}`}
                      />
                      <Typography variant='caption'>{text}</Typography>
                    </div>
                  );
                })
              ) : (
                <div className={`${classes.input}`}>
                  <ChatIcon className={classes.icon} />
                  <Typography variant='caption' className={classes.placeholder}>
                    "Speak"
                  </Typography>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
      <Handle
        type='source'
        position='right'
        id='a'
        style={{ background: '#555' }}
      />
    </>
  );
});
