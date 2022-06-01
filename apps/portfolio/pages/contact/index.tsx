import { Layout, Notification } from '../../components';
import { ExclamationCircleIcon } from '@heroicons/react/solid';
import classNames from 'classnames';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import { useState } from 'react';

export default function Contact() {
  const validationSchema = Yup.object({
    name: Yup.string().required('Your name is required.'),
    email: Yup.string()
      .required('Your email address is required.')
      .email('Your email address is invalid.'),
    message: Yup.string().required('Your message is required.'),
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    touched,
    values,
    errors,
    isSubmitting,
    isValid,
    dirty,
  } = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      // console.log(JSON.stringify(values, null, 2));
      const response = await fetch('/api/sendmail', {
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });

      setSubmitting(false);

      const { error } = await response.json();
      if (error) {
        console.log(error);
        setShowWarning(true);
        return;
      }

      resetForm();
      setShowSuccess(true);
    },
  });

  return (
    <>
      <Layout>
        <div className="space-y-4">
          <h1 className="font-heading text-secondary text-3xl font-bold lg:text-4xl">
            Get In Touch
          </h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <div className="grid grid-cols-1 gap-y-1 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label htmlFor="name" className="block text-sm font-bold">
                    Name
                  </label>
                  <div className="relative mt-1">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="name"
                      className={classNames(
                        'bg-input focus:bg-input-focus focus:text-input-focus placeholder-input focus:placeholder-input-focus border-input focus:border-input-focus focus:ring-input-focus block w-full rounded-md shadow-sm focus:outline-none focus:ring-1 dark:shadow-black dark:focus:ring-0 sm:text-sm',
                        {
                          '!border-input-error !text-input-error !placeholder-input-error focus:!border-input-error-focus focus:!ring-input-error-focus pr-10':
                            !!errors.name && touched.name,
                        }
                      )}
                      placeholder="Jane Doe"
                      required
                      aria-invalid={!!errors.name && touched.name}
                      aria-describedby={
                        !!errors.name && touched.name ? 'name-error' : ''
                      }
                    />
                    {!!errors.name && touched.name && (
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                        <ExclamationCircleIcon
                          className="text-input-error-icon h-5 w-5"
                          aria-hidden="true"
                        />
                      </div>
                    )}
                  </div>
                  <p
                    className="text-input-error-message mt-1 h-5 text-sm"
                    id="name-error"
                  >
                    {!!errors.name && touched.name && errors.name}
                  </p>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="email" className="block text-sm font-bold">
                    Email address
                  </label>
                  <div className="relative mt-1">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="email"
                      className={classNames(
                        'bg-input focus:bg-input-focus focus:text-input-focus placeholder-input focus:placeholder-input-focus border-input focus:border-input-focus focus:ring-input-focus block w-full rounded-md shadow-sm focus:outline-none focus:ring-1 dark:shadow-black dark:focus:ring-0 sm:text-sm',
                        {
                          '!border-input-error !text-input-error !placeholder-input-error focus:!border-input-error-focus focus:!ring-input-error-focus pr-10':
                            !!errors.email && touched.email,
                        }
                      )}
                      placeholder="you@example.com"
                      required
                      aria-invalid={!!errors.email && touched.email}
                      aria-describedby={
                        !!errors.email && touched.email ? 'email-error' : ''
                      }
                    />
                    {!!errors.email && touched.email && (
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                        <ExclamationCircleIcon
                          className="text-input-error-icon h-5 w-5"
                          aria-hidden="true"
                        />
                      </div>
                    )}
                  </div>
                  <p
                    className="text-input-error-message mt-1 h-5 text-sm"
                    id="email-error"
                  >
                    {!!errors.email && touched.email && errors.email}
                  </p>
                </div>

                <div className="sm:col-span-6">
                  <label htmlFor="message" className="block text-sm font-bold">
                    Message
                  </label>
                  <div className="relative mt-1">
                    <textarea
                      name="message"
                      id="message"
                      value={values.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={classNames(
                        'bg-input focus:bg-input-focus focus:text-input-focus placeholder-input focus:placeholder-input-focus border-input focus:border-input-focus focus:ring-input-focus block w-full rounded-md shadow-sm focus:outline-none focus:ring-1 dark:shadow-black dark:focus:ring-0 sm:text-sm',
                        {
                          '!border-input-error !text-input-error !placeholder-input-error focus:!border-input-error-focus focus:!ring-input-error-focus pr-10':
                            !!errors.message && touched.message,
                        }
                      )}
                      placeholder="Your message"
                      required
                      aria-invalid={!!errors.message && touched.message}
                      aria-describedby={
                        !!errors.message && touched.message
                          ? 'message-error'
                          : ''
                      }
                    ></textarea>
                    {!!errors.message && touched.message && (
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                        <ExclamationCircleIcon
                          className="text-input-error-icon h-5 w-5"
                          aria-hidden="true"
                        />
                      </div>
                    )}
                  </div>
                  <p
                    className="text-input-error-message mt-1 h-5 text-sm"
                    id="message-error"
                  >
                    {!!errors.message && touched.message && errors.message}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-end">
                <Link href="/">
                  <a
                    className="bg-button-secondary text-button-secondary border-button-secondary hover:bg-button-secondary-hover hover:text-button-secondary-hover focus:ring-offset-button-secondary-focus focus:ring-button-secondary-focus disabled:bg-button-secondary-disabled disabled:text-button-secondary-disabled inline-flex items-center rounded-md
                    border px-4
                    py-2 text-sm font-medium shadow-sm focus:outline-none
                    focus:ring-2 focus:ring-offset-2"
                  >
                    Cancel
                  </a>
                </Link>
                <button
                  type="submit"
                  className={classNames(
                    `bg-button-primary text-button-primary border-button-primary hover:bg-button-primary-hover hover:text-button-primary-hover focus:ring-offset-button-primary-focus focus:ring-button-primary-focus disabled:bg-button-primary-disabled disabled:text-button-primary-disabled inline-flex items-center rounded-md
                    border px-4
                    py-2 text-sm font-medium shadow-sm focus:outline-none
                    focus:ring-2 focus:ring-offset-2`,
                    'ml-3'
                  )}
                  disabled={!dirty || !isValid || isSubmitting}
                >
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </Layout>

      <Notification show={showSuccess} onHide={() => setShowSuccess(false)}>
        Thank you for your message!
      </Notification>
      <Notification
        className="bg-error"
        show={showWarning}
        onHide={() => setShowWarning(false)}
      >
        Something went wrong. Please try again.
      </Notification>
    </>
  );
}
