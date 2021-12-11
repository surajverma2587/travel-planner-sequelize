const getAllLocations = (req, res) => {
  res.send("getAllLocations");
};

const getLocationById = (req, res) => {
  res.send("getLocationById");
};

const createLocation = (req, res) => {
  res.send("createLocation");
};

const deleteLocationById = (req, res) => {
  res.send("deleteLocationById");
};

module.exports = {
  getAllLocations,
  getLocationById,
  createLocation,
  deleteLocationById,
};
