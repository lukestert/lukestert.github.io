function calculatePredictedTime() {
    // Get user input values
    const previousHours = parseFloat(document.getElementById("time_hr").value);
    const previousMinutes = parseFloat(document.getElementById("time_min").value);
    const previousSeconds = parseFloat(document.getElementById("time_sec").value);
    const previousDistance = parseFloat(document.getElementById("old-distance").value);
    const previousDistanceUnit = document.getElementById("distance-unit1").value;
    const newDistance = parseFloat(document.getElementById("new-distance").value);
    const newDistanceUnit = document.getElementById("distance-unit2").value;
  
    // Convert user input to total seconds for previous race time
    const previousTimeInSeconds = (previousHours * 3600) + (previousMinutes * 60) + previousSeconds;
  
    // Check if both distances use the same unit. If not, convert one to match the other.
    let convertedDistance;
    if (previousDistanceUnit !== newDistanceUnit) {
      if (previousDistanceUnit === "miles") {
        convertedDistance = previousDistance * 1.60934; // Convert miles to kilometers
      } else {
        convertedDistance = previousDistance / 1.60934; // Convert kilometers to miles
      }
    } else {
      convertedDistance = previousDistance;
    }
  
    // Apply the Peter Riegel prediction formula
    const paceFactor = Math.pow(newDistance / convertedDistance, 1.06);
    const predictedTimeInSeconds = previousTimeInSeconds * paceFactor;
  
    // Convert predicted time back to hours, minutes, and seconds
    const predictedHours = Math.floor(predictedTimeInSeconds / 3600);
    const remainingSeconds = predictedTimeInSeconds % 3600;
    const predictedMinutes = Math.floor(remainingSeconds / 60);
    const predictedSeconds = remainingSeconds % 60;
  
    // Update the predicted time display (assuming element IDs haven't changed)
    document.getElementById("newtime_hr").value = predictedHours
    document.getElementById("newtime_min").value = predictedMinutes
    document.getElementById("newtime_sec").value = Math.round(predictedSeconds)
  }
  
  // Add event listener to the button to call the function on click
  document.getElementById("calculate-button").addEventListener("click", calculatePredictedTime);
  