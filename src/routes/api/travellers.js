const { Router } = require("express");

const {
  getAllTravellers,
  getTravellerById,
  createTraveller,
  deleteTravellerById,
} = require("../../controllers/api/travellers");

const router = Router();

router.get("/", getAllTravellers);
router.get("/:id", getTravellerById);
router.post("/", createTraveller);
router.delete("/:id", deleteTravellerById);

module.exports = router;
