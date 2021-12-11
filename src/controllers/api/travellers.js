const getAllTravellers = (req, res) => {
  res.send("getAllTravellers");
};

const getTravellerById = (req, res) => {
  res.send("getTravellerById");
};

const createTraveller = (req, res) => {
  res.send("createTraveller");
};

const deleteTravellerById = (req, res) => {
  res.send("deleteTravellerById");
};

module.exports = {
  getAllTravellers,
  getTravellerById,
  createTraveller,
  deleteTravellerById,
};
