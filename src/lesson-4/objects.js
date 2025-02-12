const school = {
    name : 'Basis school',
    address: {
        country : 'Netherlands',
        city : 'Nijmegen'
    },

    schoolClass : [
        {
            number : 3,
            teacher : "Jon Black"
        }

    ],
    displayInfo: function() {
        console.log('School name: ' + this.name);
        console.log('Address: ' + this.address.country + ', '  + this.address.city);
        this.schoolClass.forEach(schoolClass => {
            console.log('Class Info: ' + schoolClass.number + ', Teacher: ' + schoolClass.teacher);
        });


    }
};

school.displayInfo();
