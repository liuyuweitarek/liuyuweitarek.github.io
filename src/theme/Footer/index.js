import React from "react";
import Footer from "@theme-original/Footer";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { ChatBot } from "../../components/chatbot/ChatBot";


export default function FooterWrapper(props) {
  const { siteConfig } = useDocusaurusContext();

  return (
    <>
      {/* <Newsletter data={siteConfig.customFields.newsletter} /> */}
      <ChatBot config={siteConfig.customFields.chatbot} />
      <Footer {...props} />
    </>
  );
}
