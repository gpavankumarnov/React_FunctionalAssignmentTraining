import * as actions from "../actions/actionTypes";

const initialState = {
  safeList: [],
  activeSafe: {},
  safesCardName_Desc: {},
};

export const updateAddFormData = (state = initialState, action) => {
  console.log(state.safeList);
  // let safesArray = [...store.safeData];
  // safesArray.push(action.payload);
  // console.log("action : " + action);

  switch (action.type) {
    case actions.addFormData:
      return {
        // safeData: [...state.safeList, action.payload],
        safeList: [...state.safeList, action.payload],
        //action.payload is formvalues inside id we are assigning to active Index.
        activeSafe: action.payload,
      };
    //activeSafe::
    //activevalue is null
    // case actions.addSecretData:
    //   return {
    //     safeList: [...state.safeList.secret, action.payload],
    //   };

    case actions.deleteSafeCard:
      debugger;
      // let position = state.safeList.length - 1;
      const filteredSafeList = state.safeList.filter(
        (remove) => remove.id !== action.payload
      );

      // console.log(position);
      return {
        ...state,
        safeList: [...filteredSafeList],
        // activeIndex: state.safeList[0],
      };
    case actions.updatedActiveSafeOnDelete:
      return {
        ...state,
        activeSafe: state.safeList[0],
      };
    case actions.activeSafe:
      // const filteredSafeName = state.safeList.filter(
      //   (e) => e.id === action.payload.id
      // );
      // const safeCardsName = filteredSafeName[0].SafeName;
      // const safeDescription = filteredSafeName[0].Description;

      // return {
      //   ...state,
      //   safesCardName_Desc: {
      //     ...state.safesCardName_Desc,
      //     name: safeCardsName,
      //     description: safeDescription,
      //   },
      // };

      return {
        ...state,
        activeSafe: action.payload,
      };

    case actions.addSecretData:
      const safe = [...state.safeList];
      const index = safe.findIndex((item) => item.id === action.payload.id);
      safe.splice(index, 1, action.payload);
      return {
        ...state,
        safeList: safe,
        activeSafe: action.payload,
      };

    default:
      return state;
  }
};

// Array.push or es6 P
