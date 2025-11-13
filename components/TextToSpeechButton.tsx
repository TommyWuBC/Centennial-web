'use client';
import { useState } from 'react';

export default function TextToSpeechButton() {
  const [speaking, setSpeaking] = useState(false);

  const handleSpeak = () => {
    const text = document.body.innerText; // reads all visible text
    const utterance = new SpeechSynthesisUtterance(text);

    utterance.onend = () => setSpeaking(false);

    setSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  const handleStop = () => {
    window.speechSynthesis.cancel();
    setSpeaking(false);
  };

  return (
    <button
      onClick={speaking ? handleStop : handleSpeak}
      className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-5 rounded-full shadow-lg transition"
    >
      {speaking ? 'Stop Reading' : 'Read Page Aloud'}
    </button>
  );
}