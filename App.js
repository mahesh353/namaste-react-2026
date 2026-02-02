import React from "react";
import ReactDOM from "react-dom/client";
import HeadingComponent from "./Heading";

/**
 * Header Component
    - Search
    - Navigation
 * Body Component
    - Resturant 
 * Footer Component
    - copyright
*/

const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src="https://marketplace.canva.com/EAFpeiTrl4c/2/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-a1RYzvS1EFo.jpg" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

var resList = [
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "1137470",
          name: "Seoul Burgers & Shakes",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/10/28/beafa281-0f9f-4401-a734-7d8c1b1fd484_56e071d8-c3c8-44ee-a3c2-4e8469e4bf28.jpg",
          locality: "Business Park",
          areaName: "Elpro City Square Mall",
          costForTwo: "₹200 for two",
          cuisines: [
            "Burger",
            "Bubble Tea",
            "Fast Food",
            "Beverages",
            "Juice and shake",
          ],
          avgRating: 4.1,
          parentId: "588706",
          avgRatingString: "4.1",
          totalRatingsString: "88",
          promoted: true,
          adTrackingId:
            "cid=47c53a5e-9e8e-4a86-b92e-c2f442bc474a~p=9~adgrpid=47c53a5e-9e8e-4a86-b92e-c2f442bc474a#ag6~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1137470~plpr=COLLECTION~eid=78e13c7a-b9ee-49da-815e-fa70cd544339~srvts=1770052037942~collid=83637",
          sla: {
            deliveryTime: 43,
            lastMileTravel: 5,
            serviceability: "SERVICEABLE",
            slaString: "40-45 mins",
            lastMileTravelString: "5.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-02-03 00:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹120",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "47c53a5e-9e8e-4a86-b92e-c2f442bc474a",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=1137470&source=collection&query=Burger",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "772299",
          name: "McDonald's",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2026/1/13/c925942a-cea6-4dec-bf1e-4453eccf10c6_34038765-59ff-4a22-8d21-1ee3b004e447.png",
          locality: "W Biz",
          areaName: "Wakad",
          costForTwo: "₹400 for two",
          cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
          avgRating: 4.5,
          parentId: "630",
          avgRatingString: "4.5",
          totalRatingsString: "3.9K+",
          sla: {
            deliveryTime: 31,
            lastMileTravel: 4.1,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "4.1 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-02-02 23:45:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "Rxawards/_CATEGORY-Burger.png",
                description: "Delivery!",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "Rxawards/_CATEGORY-Burger.png",
                      description: "Delivery!",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹99",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=772299&source=collection&query=Burger",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
];

const RestaurantCardComponent = (prop) => {
const {resData} = prop;

  return (
    <div className="res-card">
      <img
        className="dishPic"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/" + resData.card.card.info.cloudinaryImageId}
      />
      <h3>{resData.card.card.info.name}</h3>
      <h4>{resData.card.card.info.cuisines.join(", ")}</h4>
      <h4>Rating: {resData.card.card.info.avgRating}</h4>
      <h4>{resData.card.card.info.sla.deliveryTime}</h4>
    </div>
  );
};

const BodyComponent = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
        {
          resList.map((restaurant) => (
            <RestaurantCardComponent resData={restaurant} key={restaurant.card.card.info.id}/>
          ))
        }
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <BodyComponent />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
