import { useState } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout/Layout';

const Contactus = () => {
  const [formData, setFormData] = useState({
    phone: '',
    subject: '',
    message: '',
    email: 'deepakthapliyal47@gmail.com',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { subject, message, email, phone } = formData;
    let phoneno = phone || 'Not provided';
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message + '\n\nUser phone: ' + phoneno)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <Layout>
      <div>
        <section className="bg-white dark:bg-black  dark:text-white text-black ">
          <Link href="/">
            
              <span className="material-symbols-outlined dark:text-gray-700 float-right text-4xl cursor-pointer m-4">
                close
              </span>
            
          </Link>
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-left hover:text-orange-400 text-4xl tracking-tight font-extrabold  font-serif">
              Contact Us
            </h2>
            <p className="mb-8 hover:text-orange-400 lg:mb-16 font-light   sm:text-xl">
              Email your any queries! Stay connected.
            </p>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2  text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your phone no
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter contact no (not required)"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-dark"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Leave a comment..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="button hover:bg-orange-400 hover:text-white dark:hover:bg-orange-400 dark:hover:text-black py-3 px-5 text-sm font-medium text-center  rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-gray-700 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Send message
              </button>
            </form>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contactus;
