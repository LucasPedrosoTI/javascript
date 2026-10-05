import React from "react";

import "./Business.css";

class Business extends React.Component {
  render() {
    const gMaps = encodeURI(
      this.props.business.address,
      this.props.business.city,
      this.props.business.state
    );

    return (
      <div className="Business">
        <a
          className="image-container"
          href={this.props.business.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={this.props.business.imageSrc}
            alt={this.props.business.name}
          />
        </a>
        <h2>{this.props.business.name}</h2>
        <div className="Business-information">
          <div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${gMaps}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>{this.props.business.address}</p>
              <p>{this.props.business.city}</p>
              <p>
                {this.props.business.state} {this.props.business.zipCode}
              </p>
            </a>
            <p>
              <em>{(this.props.business.distance / 1000).toFixed(0)} km</em>
            </p>
            <a href={`tel:${this.props.business.phone}`}>
              <strong>{this.props.business.phone}</strong>
            </a>
          </div>
          <div className="Business-reviews">
            <h3>{this.props.business.category.join(", ")}</h3>
            <h3 className="rating">{this.props.business.rating} stars</h3>
            <strong>{this.props.business.price}</strong>
            <p>{this.props.business.reviewCount} reviews</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Business;
