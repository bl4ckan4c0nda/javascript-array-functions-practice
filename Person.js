class Person {
    constructor(personDetails) {
        this.personDetails = personDetails
    }

    // Get characters with mass greater than 100
    greater100Character() {
        return this.personDetails.filter((detail) => detail.mass > 100)
    }

    // Get characters with height less than 200
    heightLess200() {
        return this.personDetails.filter((detail) => detail.height < 200)
    }

    // Get all male characters
    getMale() {
        return this.personDetails.filter((detail) => detail.gender === 'male')
    }

    // Get all female characters
    getFemale() {
        return this.personDetails.filter((detail) => detail.gender === 'female')
    }
}
module.exports = Person