import ChatBot from "react-simple-chatbot";
import theme from "../theme/chatbotTheme";

import { ThemeProvider } from "styled-components";

const steps = [
  {
    id: "hello-world",
    message: "Hello World!",
    end: true,
  },
];

export default function AviadChatbot(props) {
  return (
    <ThemeProvider theme={theme}>
      <ChatBot steps={steps} />
    </ThemeProvider>
  );
}
