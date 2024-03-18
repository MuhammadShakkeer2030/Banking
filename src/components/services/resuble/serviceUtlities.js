const mobileServices = [
  {
    serviceName: "Jio",
    serviceCategory: "mobile",
    serviceIcon: <FaMobile />,
    serviceProviders: ["Jio"],
    plans: {
      Jio: ["1.5GB Data", "Unlimited Calls", "100 Messages"],
    },
  },
  {
    serviceName: ["Airtel"],
    serviceCategory: "mobile",
    serviceIcon: <FaMobile />,
    serviceProviders: "Airtel",
    plans: {
      Airtel: ["2GB Data", "Unlimited Calls", "150 Messages"],
    },
  },
];

// Electricity Services
const electricityServices = [
  {
    serviceName: "Electricity",
    serviceCategory: "electricity",
    serviceIcon: <FaBolt />,
    serviceProviders: ["Provider A", "Provider B", "Provider C"],
    plans: {
      "Provider A": ["Plan X", "Plan Y", "Plan Z"],
      "Provider B": ["Plan M", "Plan N", "Plan O"],
      "Provider C": ["Plan P", "Plan Q", "Plan R"],
    },
  },
];

// DTH Services
const dthServices = [
  {
    serviceName: "DTH",
    serviceCategory: "dth",
    serviceIcon: <FaTv />,
    serviceProviders: ["Provider X", "Provider Y", "Provider Z"],
    plans: {
      "Provider X": ["Plan A", "Plan B", "Plan C"],
      "Provider Y": ["Plan D", "Plan E", "Plan F"],
      "Provider Z": ["Plan G", "Plan H", "Plan I"],
    },
  },
];

// Gas Services
const gasServices = [
  {
    serviceName: "Gas",
    serviceCategory: "gas",
    serviceIcon: <FaGasPump />,
    serviceProviders: ["Provider Alpha", "Provider Beta", "Provider Gamma"],
    plans: {
      "Provider Alpha": ["Plan 1", "Plan 2", "Plan 3"],
      "Provider Beta": ["Plan 4", "Plan 5", "Plan 6"],
      "Provider Gamma": ["Plan 7", "Plan 8", "Plan 9"],
    },
  },
];

// Broadband Services
const broadbandServices = [
  {
    serviceName: "Broadband",
    serviceCategory: "broadband",
    serviceIcon: <FaWifi />,
    serviceProviders: ["Provider XX", "Provider YY", "Provider ZZ"],
    plans: {
      "Provider XX": ["Plan Alpha", "Plan Beta", "Plan Gamma"],
      "Provider YY": ["Plan Delta", "Plan Epsilon", "Plan Zeta"],
      "Provider ZZ": ["Plan Theta", "Plan Iota", "Plan Kappa"],
    },
  },
];

export {
  mobileServices,
  electricityServices,
  dthServices,
  gasServices,
  broadbandServices,
};
