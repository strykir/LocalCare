import Doctor from '../helper/doctorBuilder.js';
import { doctorData } from '../data/doctorData.js';

export const doctorsArray = doctorCVSToArray(doctorData);

function doctorCVSToArray(doctorCVS){
    let doctorArray = new Array();
    for (let i = 0; i < doctorCVS.length; i++)
        doctorArray[i] = new Doctor(doctorCVS[i]);
    return doctorArray;
}

function coordinateDistance(long1, lat1, long2, lat2){ // returns km away
    return Math.abs(Math.acos(Math.sin(lat1)*Math.sin(lat2) + Math.cos(lat1) * Math.cos(lat2) * Math.cos(long2 - long1))) * 6371;
}

function between(compared, min, max){
    return (min <= compared && compared <= max); 
}

function compareTime(h1, m1, h2, m2){ 
    // t1 < t2 -> -1
    // t1 > t2 -> 1
    // t1 == t2 -> 0
    if (h1 < h2) return -1;
    if (h1 > h2) return 1;
    if (m1 < m2) return -1;
    if (m1 > m2) return 1;
    return 0; 
}

function validTimePeriod( // each var in format of "XX:XX"
    startScheduledTime, endScheduledTime, // doctor's time
    startComparisonTime, endComparisionTime // filter time
){
    let startScheduledHour, 
        startScheduledMin, 
        endScheduledHour, 
        endScheduledMin, 
        startComparisonHour, 
        startComparisonMin, 
        endComparisonHour, 
        endComparisonMin;

    [startScheduledHour, startScheduledMin] = startScheduledTime.split(':').array.forEach(element => parseInt(element));
    [endScheduledHour, endScheduledMin] = endScheduledTime.split(':').array.forEach(element => parseInt(element));
    [startComparisonHour, startComparisonMin] = startComparisonTime.split(':').array.forEach(element => parseInt(element));
    [endComparisonHour, endComparisonMin] = endComparisionTime.split(':').array.forEach(element => parseInt(element));

    // doctor's availability time must be earlier/equal to filter start time
    if (compareTime(startScheduledHour, startScheduledMin, startComparisonHour, startComparisonMin) > 0) return false;

    // doctor's availability time must later/equal to filter end time
    if (compareTime(endScheduledHour, endScheduledMin, endComparisonHour, endComparisonMin) < 0) return false;
    
    return true;
}

export function filterResults(
    longitude,
    latitude,
    radius,
    fieldOfStudy,
    availability,
    minExp, maxExp,
    gender,
    minStar, maxStar,
    minPrice, maxPrice
)
{
    let filtered = doctorsArray;
    // filtered = filtered.filter((doctor) => coordinateDistance(longitude, latitude, doctor.long, doctor.lat) < radius);
    if (fieldOfStudy != 'Any') filtered = filtered.filter((doctor) => fieldOfStudy === doctor.fieldOfStudy);
    // filter based on availability
    if (gender != 'Any') filtered = filtered.filter((doctor) => gender === doctor.gender);
    filtered = filtered.filter((doctor) => between(doctor.experience, minExp, maxExp));
    filtered = filtered.filter((doctor) => between(doctor.starVal, minStar, maxStar));
    filtered = filtered.filter((doctor) => between(doctor.price, minPrice, maxPrice));

    return filtered;
}
