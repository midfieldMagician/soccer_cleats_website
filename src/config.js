// export const base_url = process.env.REACT_APP_ENV && process.env.REACT_APP_ENV === 'development' ? "http://localhost:2504":"https://turfcleats-backend.herokuapp.com";
export const base_url = process.env.NODE_ENV !== 'production' ? "http://localhost:2504":"https://turfcleats-backend.herokuapp.com";
export const STRIPE_APIKEY = 'pk_test_q58H7MWrSfERSzuacF1SmkP200AnDPO91e'