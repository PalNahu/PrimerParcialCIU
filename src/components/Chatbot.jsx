import React, { useState } from 'react';
// import { SessionsClient } from 'dialogflow';

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState('');

  const handleUserMessageChange = (e) => {
    setUserMessage(e.target.value);
  };

  const handleSendMessage = async () => {
    if (userMessage.trim() === '') return;

    setMessages([
      ...messages, {text: userMessage, isUser: true},
    ]);

    // const client = new SessionsClient({
    //   keyFilename: '/path/to/your/credentials.json',
    // });

    // const sessionPath = client.projectAgentSessionPath(
    //   'YOUR_PROJECT_ID',
    //   'YOUR_SESSION_ID'
    // );

    // const request = {
    //   session: sessionPath,
    //   queryInput: {
    //     text: {
    //       text: userMessage,
    //       languageCode: 'es',
    //     },
    //   },
    // };

    try {
      // const [response] = await client.detectIntent(request);

      // const chatbotMessage = response.queryResult.fulfillmentText;

      // setMessages([
      //   ...messages,
      //   { text: userMessage, isUser: true },
      //   { text: chatbotMessage, isUser: false },
      // ]);

      setUserMessage('');
    } catch (error) {
      console.error('Error al enviar mensaje a Dialogflow:', error);
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={message.isUser ? 'user-message' : 'bot-message'}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="user-input">
        <input
          type="text"
          placeholder="Escribe tu mensaje..."
          value={userMessage}
          onChange={handleUserMessageChange}
        />
        <button onClick={handleSendMessage}>Enviar</button>
      </div>
    </div>
  );
}

export default Chatbot;
