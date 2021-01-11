import React, {useRef, useEffect} from "react";
import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";
import ChannelMessage, { Mention } from '../ChannelMessage';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  useEffect(() => {
    const div = messagesRef.current;
    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref = {messagesRef}>
      <ChannelMessage
        author="Rafael Treiber"
        date="11/01/2021"
        content="Bora codar React"
      />
      <ChannelMessage
        author="Jão"
        date="11/01/2021"
        content="O que?"
      />
      <ChannelMessage
        author="Tonho"
        date="11/01/2021"
        content="Paz do senhor"
      />
      <ChannelMessage
        author="Juca"
        date="11/01/2021"
        content="Quer comprar uma rede?"
      />
      <ChannelMessage
        author="Nerso"
        date="11/01/2021"
        content="To trupicando nas preda"
      />
      <ChannelMessage
        author="Cerso"
        date="11/01/2021"
        content="Peido pesa? Senão acho que caguei"
      />
      <ChannelMessage
        author="Creusa"
        date="11/01/2021"
        content="Dérreal a brusinha"
      />
      <ChannelMessage
        author="Bob"
        date="11/01/2021"
        content="Mó brisa mano"
      />
      <ChannelMessage
        author="Hurley"
        date="11/01/2021"
        content="O que tem pra comer?"
      />
      <ChannelMessage
        author="Bruna Wolff"
        date="11/01/2021"
        content={
          <>
            <Mention>@Rafael Treiber</Mention>, To com sono. Posso dormir um
            pouquinho?
          </>
        }
        hasMention
        isBot
      />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
