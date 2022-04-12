const {db} = require('../config/firebase-config');
const Student = require('../models/student');


const addCities = async (req, res, next) => {
    try {
        const citiesRef = db.collection('cities');

        await citiesRef.doc('SF').set({
            name: 'San Francisco', state: 'CA', country: 'USA',
            capital: false, population: 860000,
            regions: ['west_coast', 'norcal']
        });
        await citiesRef.doc('LA').set({
            name: 'Los Angeles', state: 'CA', country: 'USA',
            capital: false, population: 3900000,
            regions: ['west_coast', 'socal']
        });
        await citiesRef.doc('DC').set({
            name: 'Washington, D.C.', state: null, country: 'USA',
            capital: true, population: 680000,
            regions: ['east_coast']
        });
        await citiesRef.doc('TOK').set({
            name: 'Tokyo', state: null, country: 'Japan',
            capital: true, population: 9000000,
            regions: ['kanto', 'honshu']
        });
        await citiesRef.doc('BJ').set({
            name: 'Beijing', state: null, country: 'China',
            capital: true, population: 21500000,
            regions: ['jingjinji', 'hebei']
        });
        
        await citiesRef.doc('SF').collection('landmarks').doc().set({
            name: 'Golden Gate Bridge',
            type: 'bridge'
          });
          await citiesRef.doc('SF').collection('landmarks').doc().set({
            name: 'Legion of Honor',
            type: 'museum'
          });
          await citiesRef.doc('LA').collection('landmarks').doc().set({
            name: 'Griffith Park',
            type: 'park'
          });
          await citiesRef.doc('LA').collection('landmarks').doc().set({
            name: 'The Getty',
            type: 'museum'
          });
          await citiesRef.doc('DC').collection('landmarks').doc().set({
            name: 'Lincoln Memorial',
            type: 'memorial'
          });
          await citiesRef.doc('DC').collection('landmarks').doc().set({
            name: 'National Air and Space Museum',
            type: 'museum'
          });
          await citiesRef.doc('TOK').collection('landmarks').doc().set({
            name: 'Ueno Park',
            type: 'park'
          });
          await citiesRef.doc('TOK').collection('landmarks').doc().set({
            name: 'National Museum of Nature and Science',
            type: 'museum'
          });
          await citiesRef.doc('BJ').collection('landmarks').doc().set({
            name: 'Jingshan Park',
            type: 'park'
          });
          await citiesRef.doc('BJ').collection('landmarks').doc().set({ 
            name: 'Beijing Ancient Observatory',
            type: 'museum'
          });
        res.send('Records saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    addCities
}