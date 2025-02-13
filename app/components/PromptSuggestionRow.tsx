import { PromptSuggestionButton } from './PromptSuggestionButton';

export const PromptSuggestionRow = ({ onPromptClick }) => {
  const prompts = [
    'Who is head of racing for Aston Martin?',
    'Who is the highest paid F1 driver?',
    'Who will be the newest F1 driver for Ferrari?',
  ];
  return (
    <div className="prompt-suggestion-row">
      {prompts.map((prompt, index) => (
        <PromptSuggestionButton
          key={index}
          text={prompt}
          onClick={() => onPromptClick(prompt)}
        />
      ))}
    </div>
  );
};
