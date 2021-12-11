const connection = require("../config/connection");
const travellerSeedData = require("./travellerSeedData.json");
const locationSeedData = require("./locationSeedData.json");
const { Traveller, Location, Trip } = require("../models");
const { logError, logInfo } = require("../utils/logger");

const seedDatabase = async () => {
  try {
    await connection.sync({ force: true });
    logInfo("DB connection", "Success");

    const travellers = await Traveller.bulkCreate(travellerSeedData);
    logInfo("Seed success", "Successfully seeded travellers");

    const locations = await Location.bulkCreate(locationSeedData);
    logInfo("Seed success", "Successfully seeded locations");

    // Create trips at random
    for (let i = 0; i < 10; i++) {
      // Get a random traveller's `id`
      const { id: randomTravellerId } =
        travellers[Math.floor(Math.random() * travellers.length)];

      // Get a random location's `id`
      const { id: randomLocationId } =
        locations[Math.floor(Math.random() * locations.length)];

      // Create a new trip with random `trip_budget` and `traveller_amount` values, but with ids selected above
      await Trip.create({
        tripBudget: (Math.random() * 10000 + 1000).toFixed(2),
        travellerAmount: Math.floor(Math.random() * 10) + 1,
        travellerId: randomTravellerId,
        locationId: randomLocationId,
      });
    }

    logInfo("Seed success", "Successfully seeded trips");

    process.exit(0);
  } catch (error) {
    logError("DB connection", error.message);
  }
};

seedDatabase();
