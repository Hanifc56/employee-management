"use client";

import { Accordion } from "flowbite-react";
import img from "../../assets/perform-girl.webp";
const FAQ = () => {
  return (
    <div className="flex md:flex-row flex-col justify-center items-center gap-6">
      <div className="w-1/2">
        <img src={img} alt="" className="w-full" />
      </div>
      <div>
        <Accordion>
          <h1 className="mb-4 text-2xl font-semibold p-4 text-gray-500 dark:text-gray-400">
            FAQ :
          </h1>
          <Accordion.Panel>
            <Accordion.Title>
              How does EMS ensure data security for sensitive employee
              information stored in their management software?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                EMS employs robust encryption protocols and access controls to
                safeguard all employee data stored within their management
                software, ensuring comprehensive data security.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              Can EMS integrate with existing HR systems or payroll platforms
              used by our company?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Yes, EMS offers seamless integration capabilities with a wide
                range of HR systems and payroll platforms, allowing for smooth
                transition and interoperability with existing company software.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              What level of customer support does EMS provide for onboarding and
              ongoing assistance with their employee management solutions?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                EMS provides dedicated customer support services, including
                personalized onboarding assistance and ongoing technical support
                to address any queries or issues encountered while using their
                employee management solutions.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
