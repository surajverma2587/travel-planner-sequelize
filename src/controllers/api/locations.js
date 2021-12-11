const { Location, Trip } = require("../../models");
const { logError } = require("../../utils/logger");

const getAllLocations = async (req, res) => {
  try {
    const data = await Location.findAll();
    return res.json({ success: true, data });
  } catch (error) {
    logError("GET location", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
};

const getLocationById = async (req, res) => {
  try {
    const data = await Location.findByPk(req.params.id, {
      include: [
        {
          model: Trip,
        },
      ],
    });

    if (data) {
      return res.json({ success: true, data });
    }

    return res
      .status(404)
      .json({ success: false, error: "Location does not exist" });
  } catch (error) {
    logError("GET location by ID", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
};

const createLocation = async (req, res) => {
  try {
    const { locationName } = req.body;

    if (locationName) {
      await Location.create({ locationName });
      return res.json({ success: true, data: "Created location" });
    }

    return res
      .status(400)
      .json({ success: false, error: "Please provide the required fields" });
  } catch (error) {
    logError("POST location", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
};

const deleteLocationById = async (req, res) => {
  try {
    await Location.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.json({ success: true, data: "Deleted location" });
  } catch (error) {
    logError("DELETE location", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
};

module.exports = {
  getAllLocations,
  getLocationById,
  createLocation,
  deleteLocationById,
};
