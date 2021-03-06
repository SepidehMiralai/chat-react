import React from 'react';
import NewMessageForm from './NewMessageForm';

const MessagesArea = ({
  chat: { id, title, messages },
}) => {
  return (
    <div className="messagesArea">
      <h2>{title}</h2>
      <ul>{orderedMessages(messages)}</ul>
      <NewMessageForm chat_id={id} />
    </div>
  );
};

export default MessagesArea;

// helpers

const orderedMessages = messages => {
  const sortedMessages = messages.sort(
    (a, b) => new Date(a.created_at) - new Date(b.created_at)
  );
  return sortedMessages.map(message => {
    return <li key={message.id}>{message.content}</li>;
  });
};