const express = require("express");
const morgan = require("morgan");

const { mongoose } = require("./database");
const { createRoles } = require("./libs/initialSetup");

const app = express();
createRoles();

// Settings
app.set("port", process.env.PORT || 3000);

// Middlewares 
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/auth/", require("./routes/auth.routes"));
app.use("/api/season/", require("./routes/season.routes"));
app.use("/api/service/", require("./routes/services.routes"));
app.use("/api/typeRoom/", require("./routes/typeRooms.routes"));
app.use("/api/typeEvent/", require("./routes/typeEvents.routes"));
app.use("/api/eventPrice/", require("./routes/eventPrice.routes"));
app.use("/api/roomPrice/", require("./routes/roomPrices.routes"));
app.use("/api/room/", require("./routes/rooms.routes"));
app.use("/api/event/", require("./routes/events.routes"));
app.use("/api/hotel/", require("./routes/hotels.routes"));
app.use("/api/reservation", require("./routes/reservations.routes"));
app.use("/api/expense", require("./routes/expenses.routes"));

// Starting the Server
app.listen(app.set("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
