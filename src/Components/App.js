import React from 'react';
import Categories from './Categories';
import Header from "./Header"



// 'https://cors-anywhere.herokuapp.com/https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=wMrIxYjKdpTQq76wy7ngPAG1OD0VJy8'
class App extends React.Component { 
    render() {
        return (
            <div>
                <Header />
                <Categories />
            </div>
        );        
    };
};
export default App;