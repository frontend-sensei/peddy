let stepCount = 0;
let maxMagnitude = 0
const app = document.getElementById('app')

if ('DeviceMotionEvent' in window) {
  window.addEventListener('devicemotion', (event) => {
    const acceleration = event.accelerationIncludingGravity;

    // Calculate the magnitude of acceleration
    const magnitude = Math.sqrt(
      acceleration.x * acceleration.x +
      acceleration.y * acceleration.y +
      acceleration.z * acceleration.z
    );

    // Define a threshold to detect steps (you may need to adjust this)
    const threshold = 13;
    app.innerHTML = `Step count: ${stepCount}. 
    magnitude ${parseFloat(magnitude).toFixed(4)} 
    maxMagnitude ${maxMagnitude}
    threshold ${threshold}`

    // Check if the magnitude exceeds the threshold
    if (magnitude > threshold) {
      stepCount++; // Increment step count
      // You can update your UI or do further processing here

      console.log('Step count:', stepCount);
    }

    if(maxMagnitude < magnitude) maxMagnitude = magnitude
  });
} else {
  const message = 'DeviceMotion API not supported on this device.'
  app.innerHTML = message
  console.log(message);
}



