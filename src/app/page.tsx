import { Conversation } from "./components/conversation";

export default function Home() {
  return (
    <main className="main-container">
      <div className="content-wrapper">
        <h1 className="page-title">ElevenLabs Conversational AI</h1>
        <Conversation />
      </div>
    </main>
  );
}
