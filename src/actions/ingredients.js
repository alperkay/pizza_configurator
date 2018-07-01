export const SELECT_BASE = 'SELECT_BASE'
export const SELECT_SAUCE = 'SELECT_SAUCE'
export const SELECT_TOPPINGS = 'SELECT_TOPPINGS'
export const SELECT_DRONE = 'SELECT_DRONE'

export function selectBase(base) {
  return {
    type: SELECT_BASE,
    payload: base
  }
}

export function selectSauce(sauce) {
  return {
    type: SELECT_SAUCE,
    payload: sauce
  }
}

export function selectToppings(topping) {
  return {
    type: SELECT_TOPPINGS,
    payload: topping
  }
}

export function selectDrone(drone) {
  return {
    type: SELECT_DRONE,
    payload: drone
  }
}
