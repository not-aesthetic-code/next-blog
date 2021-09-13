import { Fragment } from "react";
import ContactForm from "../../components/contact/contact-form";
import Head from "next/head";
function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>Contact me</title>
        <meta name="decription" content="Send message to me" />
      </Head>
      <ContactForm />
    </Fragment>
  );
}
export default ContactPage;
