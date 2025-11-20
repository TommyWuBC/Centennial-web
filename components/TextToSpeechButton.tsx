'use client';
import { useState } from 'react';

export default function TextToSpeechButton() {
  const [speaking, setSpeaking] = useState(false);

  const handleSpeak = () => {
    const main = document.querySelector('main');
    const text = main ? main.innerText : '';

    if (!text || text.trim().length === 0) {
      alert("Nothing to read on this page.");
      return;
    }

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
