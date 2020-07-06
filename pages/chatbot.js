import Head from "next/head";
import Layout from "../components/Layout";
import AviadChatbot from "../components/chatbot";

export default function chatbot() {
  return (
    <Layout>
      <Head>
        <title>One</title>
      </Head>
      <AviadChatbot />
    </Layout>
  );
}
