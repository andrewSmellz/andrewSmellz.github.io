function setTimeOfDay(){
    const hour = new Date().getHours();
    const timeElement = document.getElementById('timeOfDay');
    if (hour >= 5 && hour < 12) {
        timeElement.textContent = 'morning';
    } else if (hour >= 12 && hour < 17) {
        timeElement.textContent = 'afternoon';
    } else if (hour >= 17 && hour < 21) {
        timeElement.textContent = 'evening';
    } else {
        timeElement.textContent = 'night';
    }
}
setTimeOfDay();