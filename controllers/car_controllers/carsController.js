exports.getAllCars = async (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "all the cars",
  });
};

exports.getAllSUVs = async (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "all SUVs",
  });
};

exports.getAllSedans = async (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "all Sedans",
  });
};

exports.getAllTrucks = async (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "all Trucks",
  });
};

exports.getAllVans = async (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "all Vans",
  });
};

exports.getCar = async (req, res, next) => {
  console.log(req.params.id);
  res.status(200).json({
    status: "success",
    message: "one car",
  });
};

exports.postCar = async (req, res, next) => {
  console.log("posted car", req.body);
  res.status(201).json({
    status: "success",
  });
};

exports.updateCar = async (req, res, next) => {
  console.log("updated car", req.body);
  res.status(204).json({
    status: "success",
  });
};

exports.deleteCar = async (req, res, next) => {
  res.status(200).json({
    status: "success",
  });
};
