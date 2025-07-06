
// New logic for selecting current location and destination
const currentLocation = document.getElementById('current-location');
const destination = document.getElementById('destination');
const submitBtn = document.getElementById('submit-btn');

if (currentLocation && destination && submitBtn) {
    submitBtn.addEventListener('click', function() {
        const current = currentLocation.options[currentLocation.selectedIndex].text;
        const dest = destination.options[destination.selectedIndex].text;
        if (current === dest) {
            alert('You are already at your destination!');
        } else {
            alert(`Starting ride from ${current} to ${dest}.`);
        }
    });
}


