import React from 'react';
import Message1 from './message1';

const Messages = ({a2}) => (
  <div>
    <h2>Messages</h2>
    Messages
    <Message1 b1={'hai'} b2={'how are you'}/>
    {a2}
  </div>
);

export default Messages;
