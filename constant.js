export const IMG_CDN_URL = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/"
// Image CDN URL for Restaurant Menu
export const ITEM_IMG_CDN_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";

// Swiggy API to get Restaurant data with corsanywhere
export const swiggy_api_URL =
  "https://corsanywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING";

// Swiggy API to get Restaurant Menu data with corsanywhere
export const swiggy_menu_api_URL =
  // "https://corsanywhere.herokuapp.com/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=";
  "https://instafood.onrender.com/api/menu?lat=21.1702401&lng=72.83106070000001&restaurantId=";

 // menu items api card type key
export const MENU_ITEM_TYPE_KEY = "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
export const RESTAURANT_TYPE_KEY = "type.googleapis.com/swiggy.presentation.food.v2.Restaurant";
//config driven ui

export const Github_UserName = "LitPreet";
export const Github_link = "https://github.com/LitPreet";
export const Github_Repo_link = "https://github.com/LitPreet/food-app";
export const Twitter_link = "https://twitter.com/lit_preet";
export const Fb_link = "https://www.facebook.com/preet.bhardwaj.733076";
export const Insta_link = "https://instagram.com/lit_preet02";

export const Github_Repository_Name = "food-app";

// Github API for Users
export const Github_API_User = "https://api.github.com/users/";
// Github Authorization Token
export const options = {
  method: "GET",
  headers: {
    Authorization: "",
  },
};