import React, { useEffect } from "react";
import { Wave } from "react-animated-text";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Faq = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });  
      }, []);
  return (
    <div data-aos="fade-up" className=" my-20">
      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <div className="text-2xl font-semibold sm:text-4xl text-center py-20 text-red-400">
            <Wave text="Frequently Asked Questions" />
          </div>

          <div  className="space-y-4">
            <details className="w-full border rounded-lg transform hover:scale-110 transition duration-300 ease-in-out">
                
              <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                What is StudyPals and how does it work?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600 ">
                StudyPals is an online platform designed for group study, where
                students can connect, form study groups, share resources, and
                collaborate on academic goals.{" "}
              </p>
            </details>
            <details className="w-full border rounded-lg transform hover:scale-110 transition duration-300 ease-in-out">
              <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                Is StudyPals free to use?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                Yes, StudyPals offers a free version with essential features for
                group study. Additional premium features may be available for
                advanced users.{" "}
              </p>
            </details>
            <details className="w-full border rounded-lg transform hover:scale-110 transition duration-300 ease-in-out">
              <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                Can I use StudyPals for both school and university-level study
                groups?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                designed for all levels of study, from high school to
                university, and supports various subjects and learning needs.{" "}
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
