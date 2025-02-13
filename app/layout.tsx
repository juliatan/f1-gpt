import './global.css';

export const metadata = {
  title: 'F1GPT',
  description: 'F1 RAG Chatbot',
};

const RootLayout = ({ children }) => {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
