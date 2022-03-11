    import React from 'react';
    import {useState} from 'react';
    import ClientRequest from './components/RequestCard'

    export default function RenderRequests() {
        const [data, setData] = useState([{
            'Avatar': 'MA',
            'client-ame': 'Muhammad Ammar',
            'date-created': 'December 12, 2021',
            'short-description': '2 Construction workers are required to build a wall',
            'location': 'Gulshan-e-Hadeed, Shah Latif Town, Karachi',
            'completion deadline':'within 2 days',       
            'detailed-description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
            {
            'Avatar': 'UF',
            'client-ame': 'Umar Farooq',
            'date-created': 'December 15, 2021',
            'short-description': '6 Construction workers are required to build a room',
            'location': 'Gulshan-e-Iqbal block 13-A',
            'completion deadline':'within 6 days',       
            'detailed-description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },  {
            'Avatar': 'AM',
            'client-ame': 'Abdul Mannan',
            'date-created': 'December 19, 2021',
            'short-description': '10 Construction workers are required to build garage',
            'location': 'Gulistan-e-Jauhar',
            'completion deadline':'within 6 days',       
            'detailed-description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },  {
            'Avatar': 'JK',
            'client-ame': 'Jatinder Kumar',
            'date-created': 'December 11, 2021',
            'short-description': '2 Painters are required to paint the room',
            'location': 'Gulshan-e-Jamal, Near Millenium Mall',
            'completion deadline':'within 6 days',       
            'detailed-description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },  {
            'Avatar': 'AZ',
            'client-ame': 'Awais Zulfiqar',
            'date-created': 'December 11, 2021',
            'short-description': '5 Sweepers are required to clean the street',
            'location': 'Gulshan-e-Hadeed, Shah Latif Town, Karachi',
            'completion deadline':'within 6 days',       
            'detailed-description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        }])
        
        return (
            <div>
                {data.map((item,i) => {return <ClientRequest key={i} data={item} />})}
            </div>
        )
    }
    