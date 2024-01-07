
const PaymentReusable = ({ services }) => {
  // Assuming 'services' is passed as a prop to the component

  return (
    <div className="flex flex-col items-center">
      {/* Banner Image */}

      {/* Search Box */}
      <input type="text" placeholder="Search..." className=" w-fll lg:w-1/2 outline-none rounded-md pl-2 text-xl" />
      <img src="./banner-fin-service.jpg" alt="Banner" className="banner-image mt-2 rounded-md" />

      {/* List of Service Providers */}
      <ul className="service-list w-full">
        {services.map((service, index) => (
          <li key={index} className="service-item py-2 hover:bg-gray-400 rounded-md flex gap-4 items-center pl-4">
            <img src="https://i.pinimg.com/736x/d9/e8/1a/d9e81ae05fe5d6686978d9def45e9254.jpg" alt="" className="w-10 h-10 rounded-full" />
            <div className="service-name">{service.name}</div>
          </li>
        ))}
      </ul>

      {/* FAQ and Help Sections */}
      <div className="faq-section">
        {/* FAQ content */}
      </div>
      <div className="help-section">
        {/* Help content */}
      </div>
    </div>
  );
};

export default PaymentReusable;
