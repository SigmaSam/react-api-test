import React from 'react'

class Categories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            items: [],
            error: null,
        }
    }

    bookArr = 'https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=';
    key = 'wMrIxYjKdpTQq76wy7ngPAG1OD0VJy8j';

    componentDidMount() {
        fetch(this.bookArr + this.key)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result.results
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }
    render() {

        let { error, isLoaded, items } = this.state;
      
        if (error) {
            return <h1>Something is wrong.</h1>;
        } else if (!isLoaded) {
            return <h1>Loading...</h1>;
        } else {
            let catArray = this.state.items.map((item) => ({ list_name: item.list_name }));
            let firstTen = []
         
            for (let i = 0; i <9; i++) {
                firstTen.push(catArray[i].list_name)
            }
     
            return (
                <div>
                    <div>
                       {/* {this.state.items}  */}
                    </div>
                </div>
            )
        }
    }
}

export default Categories