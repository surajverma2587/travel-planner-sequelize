const { logError } = require("../../utils/logger");
const { Traveller, Trip, Location } = require("../../models");

const getAllTravellers = async (req, res) => {
  try {
    const data = await Traveller.findAll();
    return res.json({ success: true, data });
  } catch (error) {
    logError("GET traveller", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
};

const getTravellerById = async (req, res) => {
  try {
    const data = await Traveller.findByPk(req.params.id, {
      include: [
        {
          model: Location,
          through: Trip,
        },
      ],
    });

    if (data) {
      return res.json({ success: true, data });
    }

    return res
      .status(404)
      .json({ success: false, error: "Traveller does not exist" });
  } catch (error) {
    logError("GET traveller by ID", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
};

const createTraveller = async (req, res) => {
  try {
    const { name, email } = req.body;

    if (name && email) {
      await Traveller.create({ name, email });
      return res.json({ success: true, data: "Created traveller" });
    }

    return res
      .status(400)
      .json({ success: false, error: "Please provide the required fields" });
  } catch (error) {
    logError("POST traveller", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
};

const deleteTravellerById = async (req, res) => {
  try {
    await Traveller.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.json({ success: true, data: "Deleted traveller" });
  } catch (error) {
    logError("DELETE traveller", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
};

module.exports = {
  getAllTravellers,
  getTravellerById,
  createTraveller,
  deleteTravellerById,
};
