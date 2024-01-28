import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Controls } from '../components/Controls';
import { List } from '../components/List';
import { ALL_COUNTRIES } from '../config';
import { Card } from '../components/Card';

export const HomePage = ({ setCountries, countries}) => {
    const [filteredCountries, setFilteredCountries] = useState(countries);

    const navigate = useNavigate();

    const handleSearch = (search, region) => {
        let data = [...countries];

        if(region){
           data = data.filter(c => c.region.includes(region))
        }

        if(search){
           data = data.filter(c => c.name.toLowerCase().includes(search.toLowerCase()))
        }

        setFilteredCountries(data);
    };

    useEffect(() => {
        if (!countries.length) axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data))
    }, []);

    useEffect(() => {
        handleSearch();
        //eslint-disable-next-line
    }, [countries])

    return (
        <>
            <Controls onSearch={handleSearch}/>
            <List>
                {
                    filteredCountries.map((c) => {
                        const countryInfo = {
                            img: c.flags.svg,
                            name: c.name,
                            info: [
                                {
                                    title: "Population",
                                    description: c.population.toLocaleString()
                                },
                                {
                                    title: "Region",
                                    description: c.region
                                },
                                {
                                    title: "Capital",
                                    description: c.capital
                                },
                            ],
                        };

                        return <Card key={c.name} {...countryInfo} onClick={() => navigate(`/country/${c.name}`)} />
                    })}
            </List>
        </>
    )
}
