let persons = [
    {
        name: 'rokas',
        categories: ['a', 'b', 'c', 'd'],
        owned_cars: [
            {
                brand: 'Ford',
                model: 'focus',
                car_options: {
                    color:'red',
                    transmission: 'auto'
                }
            },
            {
                brand: 'Opel',
                model: 'zafira',
                car_options: {
                    color:'yellow',
                    transmission: 'manual'
                }
            },
            {
                brand: 'Volkswagen',
                model: 'jetta',
                car_options: {
                    color:'aqua',
                    transmission: 'manual'
                }
            },
        ]
    },
    {
        name: 'vytenis',
        categories: ['b'],
        owned_cars: [
            {
                brand: 'Ford',
                model: 'mondeo',
                car_options: {
                    color:'blue',
                    transmission: 'auto'
                }
            },
            {
                brand: 'Volkswagen',
                model: 'passat',
                car_options: {
                    color:'brown',
                    transmission: 'auto'
                }
            },
        ]
    },
    {
        name: 'petras',
        categories: ['b', 'c', 'ce'],
        owned_cars: [
            {
                brand: 'Honda',
                model: 'civic',
                car_options: {
                    color:'red',
                    transmission: 'auto'
                }
            },
            {
                brand: 'Honda',
                model: 'civic',
                car_options: {
                    color:'black',
                    transmission: 'manual'
                }
            },
        ]
    }
]

// Sukurti korteles (boostrap arba jau kaip sugalvojat),
// kuriose butu vardas (vardas turi buti is didziuju raidziu), masinu kategorijas kurias gali vairuoti(mazosiomis raidemis).
// Taip atvaizduoti masinu kategorijas (didziosiomis raidemis) kurias gali varuoti, atskirose kortelese (brand, model, car_options).
// Masinos Korteles spalva turi buti kaip burodyta masinos car_options :)

// NAUDOTI GALIMA TIK JAVASCRIPT