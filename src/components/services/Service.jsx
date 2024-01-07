import styles from "../../style";
import { useState } from "react";
import {
  FaBolt,
  FaGasPump,
  FaGraduationCap,
  FaMobile,
  FaMoneyBill,
  FaTv,
  FaWifi,
} from "react-icons/fa";

const ServicesComponent = () => {
  // Sample data for Paytm services
  const services = [
    { name: "Recharge", icon: <FaMobile />, mob__title: "Recharge" },
    { name: "Prepaid Mobile", icon: <FaMobile />, mob__title: "Prepaid" },
    {
      name: "Pay Electricity Bill",
      icon: <FaBolt />,
      mob__title: "Electricity",
    },
    { name: "Recharge DTH Connection", icon: <FaTv />, mob__title: "DTH" },
    { name: "Book Gas Cylinder", icon: <FaGasPump />, mob__title: "Gas" },
    {
      name: "Pay Broadband & Landline Bill",
      icon: <FaWifi />,
      mob__title: "Broadband",
    },
    {
      name: "Pay Education Fee",
      icon: <FaGraduationCap />,
      mob__title: "Education",
    },
    {
      name: "All Payment Services",
      icon: <FaMoneyBill />,
      mob__title: "Services",
    },
  ];

  // State to manage selected service
  const [selectedService, setSelectedService] = useState("");

  return (
    <section
      className={`bg-black-gradient-2 py-16 px-8 text-white ${styles.paddingY}`}
    >
      <h1 className="text-4xl font-bold mb-8">Recharge & Pay Bills on Paytm</h1>
      <div className="grid grid-cols-4 gap-4">
        {services.map((service, index) => (
          <button
            key={index}
            className={`bg-gray-gradient p-4 rounded-md hover:bg-black-gradient transition duration-300 ease-in-out leading-tight xl:leading-normal flex flex-col gap-2 xl:flex-row justify-center items-center cursor-pointer ${
              selectedService?.name === service?.name ? "text-primary" : ""
            }`}
            onClick={() => setSelectedService(service?.name)}
          >
            <span>{service?.icon}</span>
            <span className="hidden lg:block text-[10px] leading-none xl:text-xl place-items-center ">
              {service?.name}
            </span>
            <span className="text-[10px] leading-none  place-items-center lg:hidden ">
              {service?.mob__title}
            </span>

          </button>
        ))}
      </div>
      {selectedService && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">
            Selected Service: {selectedService}
          </h2>
          <p className="text-lg">
            {/* Placeholder text for description */}
            Description for {selectedService} service goes here...
          </p>
        </div>
      )}
    </section>
  );
};

export default ServicesComponent;
