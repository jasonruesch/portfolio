import Layout from '../components/layout';

const Contact = () => {
  return (
    <Layout>
      <div className="w-full gap-2 text-dark-gray md:max-w-screen-sm sm-max-h:max-w-lg">
        <h1>Contact me</h1>
        <form>
          <div className="mt-6 grid gap-y-2 gap-x-4 sm:grid-cols-2 md:gap-y-6">
            <div className="sm:col-span-1">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-light-gray"
              >
                {' '}
                Name{' '}
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  className="block w-full rounded-md border-light-gray shadow-sm focus:border-brand-electric-purple focus:ring-brand-electric-purple"
                />
              </div>
            </div>

            <div className="sm:col-span-1">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-light-gray"
              >
                {' '}
                Email address{' '}
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-light-gray shadow-sm focus:border-brand-electric-purple focus:ring-brand-electric-purple"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-light-gray"
              >
                {' '}
                Message{' '}
              </label>
              <div className="mt-1">
                <textarea
                  name="message"
                  id="message"
                  className="block w-full rounded-md border-light-gray shadow-sm focus:border-brand-electric-purple focus:ring-brand-electric-purple"
                />
              </div>
            </div>
          </div>

          <div className="pt-5">
            <div className="flex justify-end">
              <button
                type="button"
                className="rounded-md border border-light-gray bg-white py-2 px-4 text-sm font-medium text-dark-gray shadow-sm hover:bg-light-gray focus:outline-none focus:ring-2 focus:ring-brand-electric-purple focus:ring-offset-2"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-brand-electric-purple py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-brand-electric-purple focus:outline-none focus:ring-2 focus:ring-brand-electric-purple focus:ring-offset-2"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Contact;
