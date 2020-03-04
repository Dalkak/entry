import { Block } from "dalkak";

export const boolean_basic_operator = new Block({
    name: "boolean_basic_operator",
    template: "<(a) (operator) (b)>",
    func: ({a, operator, b}, project) => {
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