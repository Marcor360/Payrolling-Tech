import { useEffect } from "react";

const FlowiseChatbot = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.innerHTML = `
      import Chatbot from "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js"
      Chatbot.init({
        chatflowid: "d9ca3073-da9d-48c6-81a2-d003d195cfa3",
        apiHost: "https://cloud.flowiseai.com",
        chatflowConfig: {
          theme: {
            button: {
              backgroundColor: "#040633",
              right: 20,
              bottom: 20,
              size: "medium",
            },
            chatWindow: {
              welcomeMessage: "¡Hola! 👋 Soy el asistente virtual de Payrolling Tech. ¿En qué puedo ayudarte?",
            },
          },
        },
      })
    `;
    document.body.appendChild(script);
  }, []);

  return null;
};

export default FlowiseChatbot;