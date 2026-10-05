const apiKey = process.env.REACT_APP_YELP_KEY;

const Yelp = {
  search(term, location, sortBy, price) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}&price=${price}&locale=pt_BR`,
      // `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}&price=${price}&locale=pt_BR`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data?.businesses) {
          return data.businesses.map((business) => {
            return {
              id: business.id,
              imageSrc: business.image_url,
              url: business.url,
              phone: business.phone,
              name: business.name,
              price: business.price,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              distance: business.distance,
              category: business.categories.map((category) => category.title),
              rating: business.rating,
              reviewCount: business.review_count,
            };
          });
        }
      });
  },

  autocomplete(text, latitude, longitude) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/autocomplete?text=${text}&latitude=${latitude}&longitude=${longitude}`,
      // `https://api.yelp.com/v3/autocomplete?text=${text}&latitude=${latitude}&longitude=${longitude}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => data.terms);
  },
};

export default Yelp;
