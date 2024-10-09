import { ADD, MULTI, SQRT, MINUS } from "./types";

export function add(result) {
    return {
        type: ADD,
        payload: result,
    };
}

export function minus(result) {
    return {
        type: MINUS,
        payload: result,
    };
}

export function sqrt(p1, p2) {
    return {
        type: SQRT,
        payload: p1 / p2,
    };
}

export function multi(result) {
    return {
        type: MULTI,
        payload: result,
    };
}
