function getCurrentTime() {
    var currentTimestamps = new Date(Date.now());
    return currentTimestamps.toString().substr(16, 5)
}
