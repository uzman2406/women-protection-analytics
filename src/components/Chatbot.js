import React, { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    const botpressScript = document.createElement("script");
    botpressScript.src = "https://cdn.botpress.cloud/webchat/v2.2/inject.js";
    botpressScript.async = true;
    document.body.appendChild(botpressScript);

    botpressScript.onload = () => {
      // Wait for the DOM to be fully loaded
      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initializeBotpress);
      } else {
        initializeBotpress();
      }
    };

    const initializeBotpress = () => {
      const customScript = document.createElement("script");
      customScript.src = "https://files.bpcontent.cloud/2024/11/07/16/20241107160824-V6S5MAU8.js";
      customScript.async = true;
      document.body.appendChild(customScript);
    };

    return () => {
      document.body.removeChild(botpressScript);
    };
  }, []);

  return <section id="chatbot">
  <h2>Chatbot <i class="fa-solid fa-robot"></i></h2>
  <p>Chat with our support bot for immediate assistance:</p>
</section>;
};

export default Chatbot;
