
export function getTime() {
    let currentTimestamps = new Date(Date.now());
    return currentTimestamps.toString().substr(3, 18)
}
