const createTrip = (req, res) => {
  res.send("createTrip");
};

const deleteTripById = (req, res) => {
  res.send("deleteTripById");
};

module.exports = {
  createTrip,
  deleteTripById,
};
