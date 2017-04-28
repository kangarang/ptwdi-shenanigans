const fs = require('fs');

const read = (country) => {

    fs.readFile('./countries.json', (err, data) => {

        const json = JSON.parse(data);

        let countryObject = json.filter(one => {
            return (one.name === country);
        });

        console.log('name: ', countryObject[0].name);
        console.log('capital: ', countryObject[0].capital);
        console.log('region: ', countryObject[0].region);
        console.log('subregion: ', countryObject[0].subregion);
        console.log('timezones: ', countryObject[0].timezones);

    });

};

read(process.argv[2])
