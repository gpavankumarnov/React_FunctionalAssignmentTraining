//Action creators
//Person who is submitting the form

const newBooking = (name, amount) => {
  return {
    type: "NEW_BOOKING",
    payload: {
      name: name,
      amount: amount,
    },
  };
};

const cancelBooking = (name, refundAmount) => {
  return {
    type: "CANCEL_BOOKING",
    payload: {
      name: name,
      amount: refundAmount,
    },
  };
};

//Reducers
//We need to create the reducers which will receive the actions.
//Our first reducer will be our reservation history so whenever we need to make the booking, first the ticket counter/booking clerk he has to take the first data from the store and he has to see that what is the reservaion list and he has to add this new booking into the reservation list.

//So while updating the state, you has to be very carefull that you never update the state
const oldReservationList = [];
const reservationHistory = (oldReservationList, action) => {
  //So we have two actions 1. new booking   2. cancel booking.
  if (action.type === "NEW_BOOKING") {
    //you always use the rest operator
    return [...oldReservationList, action.payload];
  } else if (action.type === "CANCEL_BOOKING") {
    return oldReservationList.filter((record) => {
      //if my record is not equals to the action.payload.name.
      //And this filter is actually going to return the array so thats why we are not going to use brackets for return.
      return record !== action.payload.name;
    });
  }
  return oldReservationList;
};

//CancelationHistory
const oldCancellationList = [];
const cancellationHistory = (oldCancellationList, action) => {
  //So we have two actions 1. new booking   2. cancel booking.
  //So what we need to do is when there is a cancellation we need to add that payload in our cancellation list.
  if (action.type === "CANCEL_BOOKING") {
    return [...oldCancellationList, action.payload];

    //if my record is not equals to the action.payload.name.
    //And this filter is actually going to return the array so thats why we are not going to use brackets for return.
  }
};

//Accounting

//Redux store
//Createstore and combineReducers
//Destructuring. and below both are coming from Redux.
const { createStore, combineReducers } = Redux;
//This central store consists of all the store - countingdepartment, the cancelationHistory, reservationHistory so to get everything combine we use Combine reducer.
//Combine reducer is a function it takes args as key:value pair
const railwayCentralStore = combineReducers({
  accounting: accounting,
  reservationHistory: reservationHistory,
  cancellationHistory: cancellationHistory,
});

///yEAH Now we have created combine reducer consits of all reducers in one central store. so now we need to assign this store to our createStore.

const store = createStore(railwayCentralStore);
//Alright so we have created our first redux store where we actually done the actioncreators, actions reducers for differ dept, and created our redux store and then assigned to createstore.

//So all complete so now how we are going to test this?
//So what we are going to do is - you need to dispatch your action to the reducer.

//We need to pass our action in dispatch method.
//so our action can be a new booking or cancelbooking.
//passing the action with name and amount.
const action = newBooking("Dipesh", 20);
store.dispatch();

//Now my data is actually stored inside the store so how do we access the data?
//SO to access the data - >
store.getState();
console.log(store.getState());
store.dispatch(action);
store.dispatch(newBooking("Amit", 30));
store.dispatch(newBooking("Alex", 30));
store.dispatch(newBooking("Sham", 30));
store.dispatch(cancelBooking("Sham", 30));
