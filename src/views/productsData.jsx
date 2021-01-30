import React from 'react';

class Products extends React.Component {
    render() {
        return (
            <React.Fragment>
                    <div className="card">
                    <img className="product-img" alt="cars"
                            src={this.props.item.images} />
                        <h4 className="name">{this.props.item.name}</h4>
                        <p className="price">{this.props.item.price}</p>
                        <p>{this.props.item.info}</p>
                    </div>
            </React.Fragment>
        )
    }
}

export default Products;