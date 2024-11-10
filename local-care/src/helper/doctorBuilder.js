

export default function doctor(doctorArray) {
    this.name = doctorArray["name"];
    this.location = doctorArray["location"];
    this.long = doctorArray["longitude"];
    this.lat = doctorArray["latitude"];
    this.experience = doctorArray["years_experience"];
    this.gender = doctorArray["gender"];
    this.fieldOfStudy = doctorArray["specialty"];
    this.starVal = doctorArray["review_star_rating"];
    this.price = doctorArray["price_per_consultation"];

    let availablilityArr = doctorArray["availability"].split(';');
    this.availability = new Object();

    for (let i = 0; i < availablilityArr.length; i++){
        let avString = availablilityArr[i];
        let splitAvString = avString.trim().split(' ', 2);
        let timeFrame = splitAvString[1].trim().split('-');

        if (timeFrame[0] === 'Unavailable') continue;

        this.availability[splitAvString[0].replace(':', '')] = [timeFrame[0], timeFrame[1]];
    }
}
