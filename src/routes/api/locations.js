const { Router } = require("express");

const {
  getAllLocations,
  getLocationById,
  createLocation,
  deleteLocationById,
} = require("../../controllers/api/locations");

const router = Router();

router.get("/", getAllLocations);
router.get("/:id", getLocationById);
router.post("/", createLocation);
router.delete("/:id", deleteLocationById);

module.exports = router;
