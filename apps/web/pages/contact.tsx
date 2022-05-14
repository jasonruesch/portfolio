import { useState } from 'react';
import Layout from '../components/layout';

const Contact = () => {
  // States for contact form fields
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  // States for contact form fields
  const [errors, setErrors] = useState({});

  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState('Send');

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleValidation = () => {
    const tempErrors = {};
    let isValid = true;

    if (name.length <= 0) {
      tempErrors['name'] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors['email'] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors['message'] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log('errors', errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValidForm = handleValidation();

    if (isValidForm) {
      const res = await fetch('/api/mail', {
        body: JSON.stringify({
          email,
          name,
          message,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText('Send');
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText('Sent');
    }
    console.log(name, email, message);
  };

  return (
    <Layout>
      <form
        onSubmit={handleSubmit}
        className="my-4 flex flex-col rounded-lg bg-white px-8 py-8 shadow-xl dark:bg-dark-gray"
      >
        <h1 className="text-2xl text-light-gray">Send a message</h1>

        <label htmlFor="name" className="text-light-gray">
          Name <span className="text-light-gray">*</span>
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          name="name"
          className="mb-4 border-b bg-transparent text-light-gray focus:outline-none"
        />

        <label htmlFor="email" className="text-light-gray">
          Email <span className="text-light-gray">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="mb-4 border-b bg-transparent text-light-gray focus:outline-none"
        />

        <label htmlFor="message" className="text-light-gray">
          Message <span className="text-light-gray">*</span>
        </label>
        <textarea
          name="message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          className="mb-4 border-b bg-transparent text-light-gray focus:outline-none"
        ></textarea>

        <div className="flex flex-row items-center justify-start">
          <button
            type="submit"
            className="mt-2 flex flex-row items-center rounded-md bg-accent px-10 py-2 text-foreground"
          >
            {buttonText}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="text-cyan-500 ml-2"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </form>
      {showSuccessMessage && <span className="text-success">Success!</span>}
      {showFailureMessage && <span className="text-warning">Error!</span>}
    </Layout>
  );
};

export default Contact;
