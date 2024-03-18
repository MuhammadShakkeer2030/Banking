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
  ServiceComponent,
} from "../../paths";

import {
  broadbandServices,
  dthServices,
  electricityServices,
  gasServices,
  mobileServices,
} from "./resuble/serviceUtlities";

const ServicesComponent = () => {
  const services = [
    {
      id: 1,
      name: "Recharge",
      category: "recharge",
      icon: <FaMobile />,
      mob__title: "Recharge",
      component: <RechargeService />,
    },
    {
      id: 2,
      name: "Prepaid Mobile",
      category: "prepaid",
      icon: <FaMobile />,
      mob__title: "Prepaid",
      component: <PrepaidMobileService />,
    },
    {
      id: 3,
      name: "Pay Electricity Bill",
      category: "electricity",
      icon: <FaBolt />,
      mob__title: "Electricity",
      component: <ElectricityBillService />,
    },
    {
      id: 4,
      name: "Recharge DTH Connection",
      category: "dth",
      icon: <FaTv />,
      mob__title: "DTH",
      component: <DTHConnectionService />,
    },
    {
      id: 5,
      name: "Book Gas Cylinder",
      category: "gas",
      icon: <FaGasPump />,
      mob__title: "Gas",
      component: <GasCylinderService />,
    },
    {
      id: 6,
      name: "Pay Broadband & Landline Bill",
      category: "boradband",
      icon: <FaWifi />,
      mob__title: "Broadband",
      component: <BroadbandBillService />,
    },
    {
      id: 7,
      name: "Pay Education Fee",
      category: "education",
      icon: <FaGraduationCap />,
      mob__title: "Education",
      component: <EducationFeeService />,
    },
    {
      id: 8,
      name: "All Payment Services",
      category: "",
      icon: <FaMoneyBill />,
      mob__title: "Services",
      component: <AllPaymentServices />,
    },
  ];

  const [selectedService, setSelectedService] = useState({
    resuableName: "",
    resuableCategory: "",
    resuableProviders: "",
    resuableplans: {},
  });

  const showServiceFeature = (serviceName, ServiceComponent, category) => {
    console.log(serviceName, ServiceComponent, category);
    setSelectedService({
      resuableName: serviceName,
      resuableCategory: category,
    });
    console.log("now clicked",selectedService);
  };

  return (
    <section
      id="services"
      className="bg-black-gradient-2 py-3 xl:py-16 px-4 xl:px-8 text-white"
    >
      <h1 className="text-2xl xl:text-4xl font-bold mb-4 xl:mb-8">Services</h1>
      <div className="grid grid-cols-4 gap-4">
        {services.map((service) => (
          <button
            key={service.id}
            className={`bg-gray-gradient p-4 rounded-md hover:bg-black-gradient transition duration-300 ease-in-out leading-tight xl:leading-normal flex flex-col gap-2 xl:flex-row justify-center items-center cursor-pointer ${
              selectedService?.name === service?.name ? "text-primary" : ""
            }`}
            onClick={() =>
              showServiceFeature(
                service?.name,
                service?.component,
                service?.category
              )
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
        <div className="mt-4 xl:mt-8">
          <h2 className=" xl:text-2xl font-bold xl:mb-4">
            Selected Service: {selectedService.Name}
          </h2>
          <div className="text-lg">
            {/* Display selected Service feature */}
            {/* {filteredServiceComponent} */}
            <ServiceComponent />
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesComponent;
