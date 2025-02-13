'use client';

import Image from 'next/image';
import logo from './assets/logo.png';

// import {useChat} from "ai/react"
import { useChat } from '@ai-sdk/react';
import { Message } from 'ai';
import { PromptSuggestionRow } from './components/PromptSuggestionRow';
import { LoadingBubble } from './components/LoadingBubble';
import { Bubble } from './components/Bubble';

const Home = () => {
  const handlePromptClick = (prompt: string) => {
    const msg: Message = {
      id: crypto.randomUUID(),
      content: prompt,
      role: 'user',
    };
    append(msg);
  };
  const {
    append,
    isLoading,
    messages,
    input,
    handleInputChange,
    handleSubmit,
  } = useChat();

  const noMessages = !messages || messages.length === 0;

  return (
    <main>
      <Image src={logo} width="250" alt="logo" />
      <section className={noMessages ? '' : 'populated'}>
        {noMessages ? (
          <>
            <p className="starter-text">
              Ask an F1 question and get the latest answers.
            </p>
            <br />
            <PromptSuggestionRow onPromptClick={handlePromptClick} />
          </>
        ) : (
          <>
            {messages.map((message, index) => (
              <Bubble key={`message-${index}`} message={message} />
            ))}
            {isLoading && <LoadingBubble />}
          </>
        )}
      </section>
      <form onSubmit={handleSubmit}>
        <input
          className="question-box"
          onChange={handleInputChange}
          value={input}
          placeholder="Ask a question"
        />
        <input type="submit" />
      </form>
    </main>
  );
};

export default Home;
