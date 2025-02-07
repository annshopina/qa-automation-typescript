const country = {
    name: 'Ukraine',
    population: 33000000,
    region: {
        mainCity: 'Kharkiv',
        isBeautiful: true,
        education: {
            schools : 1000,
            university: 150
        }
    },

    get countryInfo () {
        return 'Country:' + ' ' + this.name + ' ' + 'Population' + this.population;

    },

    get regionInfo () {
        return 'Region:' + ' ' + this.region.mainCity + ' ' + 'Is beautiful city? ' + this.region.isBeautiful;
    },

    get educationInfo () {
        return 'Information about education:' + ' ' + 'School = ' + this.region.education.schools + ' ' + 'University = ' + this.region.education.university;
    },

    set updateCountryInfo ({name, population}) {
        if (name) {
            this.name = name;
        }
        if (population) {
            this.population = population;
        }
    },

    set updateEducationInfo ({schools, university}) {
        if (schools) {
            this.region.education.schools = schools;
        }
        if (university) {
            this.region.education.university = university;
        }
    },

    calculatePopulationDensityPerEducationalCenters () {
        const totalCenters = this.region.education.schools + this.region.education.university;
        if (totalCenters === 0) {
            return 'No educational centers in this country';
        }
        return 'Population density per educational centers ' +  this.population/totalCenters;
    }

};
country.updateCountryInfo = {
    name: 'Netherlands',
    population : 18000000
};

country.updateEducationInfo = {
    schools: 2200,
    university : 330
};

console.log(country.countryInfo);
console.log(country.regionInfo);
console.log(country.educationInfo);
console.log(country.calculatePopulationDensityPerEducationalCenters());
