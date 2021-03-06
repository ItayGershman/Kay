import React, { useEffect } from 'react';
import { getAllHistory } from '../../redux/actions/historyActions';
// import historySelector from '../../redux/selectors/selectors';
import { useSelector, useDispatch } from 'react-redux';

import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, SearchOutlined } from '@material-ui/icons';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MicIcon from '@material-ui/icons/Mic';
import useStyles from './HistoryStyle';
import ChatSideBar from './sidebar/ChatSideBar';

const History = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  
  const { conversations, conversation } = useSelector((state) => {
    return state.history;
  });
  useEffect(() => {
    dispatch(getAllHistory());
  }, []);
  return (
    <div
      style={{
        display: 'flex',
        backgroundColor: '#ededed',
        height: '95vh',
        width: '98.5vw',
        boxShadow: '-3px 4px 20px -6px rgba(0,0,0,0.75)',
      }}
    >
      <ChatSideBar conversations={conversations} />
      <div className={classes.chat}>
        <div className={classes.chatHeader}>
          <Avatar />
          <div className={classes.chatHeaderInfo}>
            <h3>{conversation && conversation.title}</h3>
            <p>
              Last seen at{' '}
              {conversation && conversation.text[conversation.text.length - 1].time}
            </p>
          </div>
          <div className={classes.chatHeaderRight}>
            <IconButton>
              <SearchOutlined />
            </IconButton>
            <IconButton>
              <AttachFile />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>
        <div className={classes.chatBody}>
          {conversation &&
            conversation.text.map((message) =>
              message.direction === 'left' ? (
                <p className={classes.chatMessage}>
                  <span className={classes.chatName}>{message.name}</span>
                  {message.message}
                  <span className={classes.chatTimestamp}>{message.time}</span>
                </p>
              ) : (
                <p className={`${classes.chatMessage} ${classes.chatReceiver}`}>
                  <span className={classes.chatName}>{message.name}</span>
                  {message.message}
                  <span className={classes.chatTimestamp}>{message.time}</span>
                </p>
              )
            )}
        </div>
      </div>
    </div>
  );
};

export default History;
