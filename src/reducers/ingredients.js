import {SELECT_BASE, SELECT_SAUCE, SELECT_TOPPINGS, SELECT_DRONE} from '../actions/ingredients'


const initialState = {
  base: null,
  sauce: null,
  toppings: [],
  droneDelivery: "no",
  totalCost: 0.0
}

const baseCost = (base) => {
  if (base==="20cm NY Style") {return 6.45}
  else if (base==="25cm NY Style") {return 8.99}
  else if (base==="30cm NY Style") {return 11.49}
  else if (base==="35cm NY Style") {return 13.49}
}

const sauceCost = (sauce) => {
  if (sauce==="White sauce") {return 0.00}
  else if (sauce==="Red sauce") {return 0.00}
  else if (sauce==="Double red sauce") {return 1.00}
  else if (sauce==="Mix it up") {return 1.50}
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SELECT_BASE:
      if (!state.base) {
        if (state.droneDelivery!=='yes') return {...state, base: action.payload, totalCost: state.totalCost+baseCost(action.payload)}
        else if (state.droneDelivery === 'yes') return {...state, base: action.payload, totalCost: state.totalCost+baseCost(action.payload)*1.1}
      } else if (state.base) {
        if (state.droneDelivery!=='yes') return {...state, base: action.payload, totalCost: state.totalCost-baseCost(state.base)+baseCost(action.payload)}
        else if (state.droneDelivery === 'yes') return {...state, base: action.payload, totalCost: state.totalCost-baseCost(state.base)*1.1+baseCost(action.payload)*1.1}
      }
    case SELECT_SAUCE:
      if (!state.sauce) {
        if (state.droneDelivery!=='yes') return {...state, sauce: action.payload, totalCost: state.totalCost+sauceCost(action.payload)}
        else if (state.droneDelivery === 'yes') return {...state, sauce: action.payload, totalCost: state.totalCost+sauceCost(action.payload)*1.1}
      } else if (state.sauce) {
        if (state.droneDelivery!=='yes') return {...state, sauce: action.payload, totalCost: state.totalCost-sauceCost(state.sauce)+sauceCost(action.payload)}
        else if (state.droneDelivery === 'yes') return {...state, sauce: action.payload, totalCost: state.totalCost-sauceCost(state.sauce)*1.1+sauceCost(action.payload)*1.1}
      }

    case SELECT_TOPPINGS:
      if (action.payload.length>3) {
        action.payload.shift()
        return {...state, toppings: action.payload, totalCost: state.totalCost}
      } else if (action.payload.length<state.toppings.length) {
        if (state.droneDelivery==='yes') {return {...state, toppings: action.payload, totalCost: state.totalCost-state.toppings.length*0.55+action.payload.length*0.55}}
        else {return {...state, toppings: action.payload, totalCost: state.totalCost-state.toppings.length*0.5+action.payload.length*0.5}}
      } else if (action.payload.length<=3) {
        if (state.droneDelivery==='yes') {return {...state, toppings: action.payload, totalCost: state.totalCost+0.55}}
        else {return {...state, toppings: action.payload, totalCost: state.totalCost+0.5}}
      }
    case SELECT_DRONE:
      if (action.payload==='yes' && state.droneDelivery!=='yes') return {...state, droneDelivery: action.payload, totalCost: state.totalCost*1.1}
      if (action.payload==='yes' && state.droneDelivery === 'yes') return {...state, droneDelivery: 'no', totalCost: state.totalCost/1.1}
    default:
      return state
  }
}
