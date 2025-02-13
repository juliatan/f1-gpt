# F1 GPT - A Chatbot that uses OpenAI + RAG for Formula 1 news

## What

A practice project to learn more about how to incorporate RAG into an OpenAI chatbot. This project uses the following:

- NextJS
- Vercel's [AI SDK](https://www.npmjs.com/package/ai)
- OpenAI (LLM and embedding models)
- RAG (from a few example URLs, which I used [Puppeteer/LangChain](https://js.langchain.com/docs/integrations/document_loaders/web_loaders/web_puppeteer/) to scrape)
- [DataStax](https://www.datastax.com/) Astra (for storing the RAG data)

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
