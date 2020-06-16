const geocode = require("./utils/geocode")
const forecast = require("./utils/forecast")

const address = process.argv[2]

if (!address) {
  console.log("Enter a valid address")
} else {
  geocode(address, (error, { latitude, longitude } = {}) => {
    if (error) {
      console.log("Error", error)
    } else {
      console.log("Data", { latitude, longitude })
    }
    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        console.log("Error", error)
      } else {
        console.log("Data", forecastData)
      }
    })
  })
}
