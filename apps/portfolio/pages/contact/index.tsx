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
          <h1 className="font-alegreya-sans-sc text-accent text-3xl font-bold lg:text-4xl">
            Get In Touch
          </h1>
          <form className="space-y-4 text-black" onSubmit={handleSubmit}>
            <div>
              <div className="grid grid-cols-1 gap-y-1 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-neutral-700 dark:text-neutral-200"
                  >
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
                        'focus:border-cta focus:ring-cta block w-full rounded-md border-neutral-300 shadow-sm sm:text-sm',
                        {
                          'border-red-300 pr-10 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500':
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
                          className="h-5 w-5 text-red-500"
                          aria-hidden="true"
                        />
                      </div>
                    )}
                  </div>
                  <p className="mt-1 h-5 text-sm text-red-600" id="name-error">
                    {!!errors.name && touched.name && errors.name}
                  </p>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-neutral-700 dark:text-neutral-200"
                  >
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
                        'focus:border-cta focus:ring-cta block w-full rounded-md border-neutral-300 shadow-sm sm:text-sm',
                        {
                          'border-red-300 pr-10 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500':
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
                          className="h-5 w-5 text-red-500"
                          aria-hidden="true"
                        />
                      </div>
                    )}
                  </div>
                  <p className="mt-1 h-5 text-sm text-red-600" id="email-error">
                    {!!errors.email && touched.email && errors.email}
                  </p>
                </div>

                <div className="sm:col-span-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-neutral-700 dark:text-neutral-200"
                  >
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
                        'focus:border-cta focus:ring-cta block w-full rounded-md border-neutral-300 shadow-sm sm:text-sm',
                        {
                          'border-red-300 pr-10 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500':
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
                          className="h-5 w-5 text-red-500"
                          aria-hidden="true"
                        />
                      </div>
                    )}
                  </div>
                  <p
                    className="mt-1 h-5 text-sm text-red-600"
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
                  <a className="cursor-pointer rounded-md border border-neutral-300 bg-white py-2 px-4 text-sm font-medium text-neutral-700 shadow-sm hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2">
                    Cancel
                  </a>
                </Link>
                <button
                  type="submit"
                  className="bg-cta focus:ring-cta ml-3 inline-flex justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:bg-opacity-50 disabled:text-neutral-300"
                  disabled={!dirty || !isValid || isSubmitting}
                >
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </Layout>

      <Notification
        className="bg-success"
        show={showSuccess}
        onHide={() => setShowSuccess(false)}
      >
        Thank you for your message!
      </Notification>
      <Notification
        className="bg-warning"
        show={showWarning}
        onHide={() => setShowWarning(false)}
      >
        Something went wrong. Please try again.
      </Notification>
    </>
  );
}
