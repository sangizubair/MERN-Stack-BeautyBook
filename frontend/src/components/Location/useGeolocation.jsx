import React, { useState, useEffect } from 'react';

const useGeolocation = () => {
  const [location, setLocation] = useState({
    loaded: false,
    coordinates: { lat: "", long: "" },
    city: "",
    area: "",
  });

  const onSuccess = (location) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        long: location.coords.longitude,
      },
      city: "",
      area: "",
    });

    // Fetch city and area using reverse geocoding
    fetch(
      `https://api.opencagedata.com/geocode/v1/json?key=aadf5d8e6fc0406c8179cd3a4e780224&language=en&q=${location.coords.latitude}+${location.coords.longitude}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.results && data.results.length > 0) {
          const { city, town, village, suburb, county } = data.results[0].components;
          const areaName = suburb || village || town || city || county || "";
          setLocation((prevState) => ({
            ...prevState,
            city: city || town || village || county || "",
            area: areaName,
          }));
        }
      })
      .catch((error) => {
        console.error('Error fetching city and area:', error);
      });
  };

  const onError = (error) => {
    setLocation({
      loaded: true,
      error,
    });
  };

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      onError({
        code: 0,
        message: "Geolocation not supported",
      });
    } else {
      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
  }, []);

  return location;
};

export default useGeolocation;
