import React from 'react';
import items from './data.json';
import Products from './productsData.jsx';
import Nav from "../components/nav"
import Footer from "../components/footer"




class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: "default",
            cost: "default"
        }
    }

    handlePriceDropdownSelect = (event) => {
        this.setState({
            cost: event.target.value,
            type: event.target.value
        })
    }


    render() {
        const { type, cost } = this.state;
        return (
            <React.Fragment>
                <Nav />
                <h2 class="products-h2">This Is Our Range Of Vehicles For Rent </h2>
                <div className="form-container">
                    <div className="gridfilter">
                        <label className="filters">
                            Type:
                         </label>
                        <select id="filterSelect" value={type} onChange={this.handlePriceDropdownSelect}>
                            <option value="default">All</option>
                            <option value="Popular">Popular</option>
                            <option value="Best Selling">Best Selling</option>
                        </select>
                    </div>

                    <div>
                        <label className="filters">
                            Price:
                         </label>
                        <select id="priceSelect" value={cost} onChange={this.handlePriceDropdownSelect}>
                            <option value="default">All</option>
                            <option value="Low">$300 - $500</option>
                            <option value="Medium">$501 - $700</option>
                            <option value="High">$701 - $2000</option>
                        </select>
                    </div>
                </div>



                <section id="card-set" >
                    <div className="filter">
                        {items.items.map(item => {
                            if (type === 'default' && cost === 'default') {
                                return <Products item={item} />
                            } else if (type === item.type && cost === item.cost) {
                                return <Products item={item} />
                            } else if (type === item.type || cost === item.cost) {
                                return <Products item={item} />
                            }
                        })}
                    </div>
                </section>
                <Footer />
            </React.Fragment>
        );
    }
}


export default Filter;


