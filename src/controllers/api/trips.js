const { Trip } = require("../../models");

const createTrip = async (req, res) => {
  try {
    const { tripBudget, travellerAmount, travellerId, locationId } = req.body;

    if (tripBudget && travellerAmount && travellerId && locationId) {
      await Trip.create({
        tripBudget,
        travellerAmount,
        travellerId,
        locationId,
      });
      return res.json({ success: true, data: "Created trip" });
    }

    return res
      .status(400)
      .json({ success: false, error: "Please provide the required fields" });
  } catch (error) {
    logError("POST trip", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
};

const deleteTripById = async (req, res) => {
  try {
    await Trip.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.json({ success: true, data: "Deleted trip" });
  } catch (error) {
    logError("DELETE trip", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
};

module.exports = {
  createTrip,
  deleteTripById,
};
