import React, { useState } from "react";
import {
  FaBolt,
  FaGasPump,
  FaGraduationCap,
  FaMobile,
  FaMoneyBill,
  FaTv,
  FaWifi,
} from "react-icons/fa";
// import PaymentReusable from "./ReusableService";
import {
  AllPaymentServices,
  BroadbandBillService,
  DTHConnectionService,
  EducationFeeService,
  ElectricityBillService,
  GasCylinderService,
  PrepaidMobileService,
  RechargeService,
} from "../../paths";

const ServicesComponent = () => {
  const services = [
    {
      id: 1,
      name: "Recharge",
      icon: <FaMobile />,
      mob__title: "Recharge",
      component: <RechargeService />,
    },
    {
      id: 2,
      name: "Prepaid Mobile",
      icon: <FaMobile />,
      mob__title: "Prepaid",
      component: <PrepaidMobileService />,
    },
    {
      id: 3,
      name: "Pay Electricity Bill",
      icon: <FaBolt />,
      mob__title: "Electricity",
      component: <ElectricityBillService />,
    },
    {
      id: 4,
      name: "Recharge DTH Connection",
      icon: <FaTv />,
      mob__title: "DTH",
      component: <DTHConnectionService />,
    },
    {
      id: 5,
      name: "Book Gas Cylinder",
      icon: <FaGasPump />,
      mob__title: "Gas",
      component: <GasCylinderService />,
    },
    {
      id: 6,
      name: "Pay Broadband & Landline Bill",
      icon: <FaWifi />,
      mob__title: "Broadband",
      component: <BroadbandBillService />,
    },
    {
      id: 7,
      name: "Pay Education Fee",
      icon: <FaGraduationCap />,
      mob__title: "Education",
      component: <EducationFeeService />,
    },
    {
      id: 8,
      name: "All Payment Services",
      icon: <FaMoneyBill />,
      mob__title: "Services",
      component: <AllPaymentServices />,
    },
  ];

  const [selectedService, setSelectedService] = useState("");
  const [filteredServiceComponent, setFilteredServiceComponent] = useState();
  const showServiceFeature = (serviceName, ServiceComponent) => {
    setSelectedService(serviceName);
    setFilteredServiceComponent(ServiceComponent);
  };

  return (
    <section className="bg-black-gradient-2 py-16 px-8 text-white">
      <h1 className="text-4xl font-bold mb-8">Services</h1>
      <div className="grid grid-cols-4 gap-4">
        {services.map((service) => (
          <button
            key={service.id}
            className={`bg-gray-gradient p-4 rounded-md hover:bg-black-gradient transition duration-300 ease-in-out leading-tight xl:leading-normal flex flex-col gap-2 xl:flex-row justify-center items-center cursor-pointer ${
              selectedService?.name === service?.name ? "text-primary" : ""
            }`}
            onClick={() =>
              showServiceFeature(service?.name, service?.component)
            }
          >
            <span>{service?.icon}</span>
            <span className="hidden lg:block text-[10px] leading-none xl:text-xl place-items-center">
              {service?.name}
            </span>
            <span className="text-[10px] leading-none place-items-center lg:hidden">
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
          <div className="text-lg">
            {/* Display selected Service feature */}
            {filteredServiceComponent}
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesComponent;
