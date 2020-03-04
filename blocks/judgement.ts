import { Block } from "dalkak";

export const boolean_basic_operator = new Block({
    name: "boolean_basic_operator",
    template: "<(a) (operator) (b)>",
    func: ({a, operator, b}) => {
        a = Number(a) || a;
        b = Number(b) || b;
        switch(operator){
            case "EQUAL":
                return a === b;
            case "GREATER":
                return a > b;
            case "LESS":
                return a < b;
            case "GREATER_OR_EQUAL":
                return a >= b;
            case "LESS_OR_EQUAL":
                return a <= b;
        }
    }
});
export const boolean_and_or = new Block({
    name: "boolean_and_or",
    template: "<<a> (operator) <b>>",
    func: ({a, operator, b}) => {
        switch(operator){
            case "AND":
                return a && b;
            case "OR":
                return a || b;
        }
    }
});
export const boolean_not = new Block({
    name: "boolean_not",
    template: "<<a> 가 아니다>",
    func: ({a}) => {
        return !a;
    }
});