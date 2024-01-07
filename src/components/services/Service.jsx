import styles from "../../style";
import { useState } from "react";

const ServicesComponent = () => {
  // Sample data for Paytm services
  const services = [
    "Recharge",
    "Prepaid Mobile",
    "Pay Electricity Bill",
    "Recharge DTH Connection",
    "Book Gas Cylinder",
    "Pay Broadband & Landline Bill",
    "Pay Education Fee",
    "All Payment Services",
  ];

  // State to manage selected service
  const [selectedService, setSelectedService] = useState("");

  return (
    <section className={`bg-black-gradient-2 py-16 px-8 text-white ${styles.paddingY}`}>
      <h1 className="text-4xl font-bold mb-8">Recharge & Pay Bills on Paytm</h1>
      <div className="grid grid-cols-2 gap-4">
        {services.map((service, index) => (
          <button
            key={index}
            className={`bg-gray-gradient p-4 rounded-md hover:bg-black-gradient transition duration-300 ease-in-out ${
              selectedService === service ? "text-primary" : ""
            }`}
            onClick={() => setSelectedService(service)}
          >
            {service}
          </button>
        ))}
      </div>
      {selectedService && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Selected Service: {selectedService}</h2>
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
