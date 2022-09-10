import React, {useState, useCallback, useEffect} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';


export default function ChatBotScreen() {
  // Onde armazena as mensagens
  const [messages, setMessages] = useState([]);
  const [session_id, setSession_id] = useState('')

  const getWatson = async (props) => {
    try {
        const response = await fetch(`https://healthappchatbot.herokuapp.com/conversa?mensagem=${props}&session_id=${session_id}`)
        const json = await response.json()
        return json

    } catch (error) {
        console.log(error)
    }  
  }

  const responseWatson = async (props) => {
    const resposta = await getWatson(props)
    console.log(resposta)
    setSession_id(resposta.session_id)
    console.log('session id', session_id)
    onSend([
        {
            _id: new Date(),
            text: resposta.text,
            createdAt: new Date(),
            user: {
              _id: 2,
            },
          }
    ])


  }

  // Onde vai ser feito o armazenamento das mensagens
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Olá! Eu sou a assistente virtual do HealthApp! \nComo posso ajuda-lo?',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
    
  }, []);

  

  // Callback quando estiver enviando a mensagem
  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) =>{onSend(messages), console.log(messages[0].text), responseWatson(messages[0].text)}}
      user={{
        _id: 1,
      }}
    />
  );
}