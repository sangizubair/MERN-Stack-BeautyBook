import React, { useState, useEffect } from 'react';
import useGeolocation from './useGeolocation'; // Make sure to import your useGeolocation hook

const LocationCard = () => {
  const location = useGeolocation();
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
    // localStorage.setItem('locationPopupShown', 'true');
  };

  useEffect(() => {
    // Check if the pop-up has been shown before using the flag in localStorage
    // const popupShownBefore = localStorage.getItem('locationPopupShown') === 'true';

    if (location.loaded) {
      setShowPopup(true);
    }
  }, [location.loaded]);

  return (
    <div className='card  bg-green-50 shadow-md w-40 '>
      <div className='card-header text-left'>
        <div>
          {location.loaded ? (
            <>
              {showPopup && (
                <div className='popup '>
                  <div className='popup-content'>
                    <span className='close text-red-500' onClick={togglePopup}>
                      &times;
                    </span>
                    <div><p>City: {location.city}</p>
                      <p>Area: {location.area}</p></div>
                  </div>
                </div>
              )}
            </>
          ) : (
            "Location not available"
          )}
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
