import React, {useState, useCallback, useEffect} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import Ionicons from "react-native-vector-icons/Ionicons";
import Firebase from '../FireBase';


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
            _id: messageIdGenerator(),
            text: resposta.text,
            createdAt: new Date(),
            user: {
              _id: 2,
            },
          }
    ])


  }

  const messageIdGenerator = () => {
    // generates uuid.
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
        let r = (Math.random() * 16) | 0,
            v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}

  // Callback quando estiver enviando a mensagem
  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

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

  
  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) =>{onSend(messages), console.log(messages[0].text), responseWatson(messages[0].text)}}
      alwaysShowSend
      showUserAvatar
      isAnimated
      messageIdGenerator={() => messageIdGenerator()}
      renderActions={() => {
        return (
          <Ionicons
            name="ios-mic"
            size={35}
            hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
            color={"black"}
            style={{
              bottom: 50,
              right: 0,
              position: "absolute",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 0 },
              shadowOpacity: 0.5,
              zIndex: 2,
              backgroundColor: "transparent"
            }}

          />
        );
      }}
      user={{
        _id: 1,
      }}
    />
  );
}