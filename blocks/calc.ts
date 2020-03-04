import { Block } from "dalkak";
import basic from "@dalkak/basic";

export const calc_basic = new Block({
    pack: basic,
    name: "calc_basic",
    template: "((a: number) (operator) (b: number)): number",
    func: ({a, operator, b}: {a: number, operator: string, b: number}) => {
        switch(operator){
            case "PLUS":
                return a + b;
            case "MINUS":
                return a - b;
            case "MULTI":
                return a * b;
            case "DIVIDE":
                return a / b;
        }
    }
});
export const calc_rand = new Block({
    pack: basic,
    name: "calc_rand",
    template: "((a: number) 부터 (b: number) 사이의 무작위 수): number",
    func: ({a, b}: {a: number, b: number}) => {
        let max = Math.max(a, b);
        let min = Math.min(a, b);
        if(Number.isInteger(max) || Number.isInteger(min)){
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }else{
            return (Math.random() * (max - min) + min).toFixed(2);
        }
    }
});
export const coordinate_object = new Block({
    name: "coordinate_object",
    template: "((target) 의 (option))",
    func: ({target, option}, project) => {
        let targetThing = project.thingGroup.children.find(thing => thing.name == target);
        switch(option){
            case "x":
                return targetThing.pos.x;
            case "y":
                return targetThing.pos.y;
        }
    }
});
export const quotient_and_mod = new Block({
    pack: basic,
    name: "quotient_and_mod",
    template: "((a: number) / (b: number) 의 (operator)): number",
    func: ({a, b, operator}: {a: number, b: number, operator: string}) => {
        switch(operator){
            case "QUOTIENT":
                return Math.floor(a / b);
            case "MOD":
                return a % b;
        }
    }
});
export const calc_operation = new Block({
    pack: basic,
    name: "calc_operation",
    template: "((a: number) 의 (operator)): number",
    func: ({a, operator}: {a: number, operator: string}) => {
        switch(operator){
            case "square":
                return a * a;
            case "factorial":
                return [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800, 39916800, 479001600, 6227020800, 87178291200, 1307674368000, 20922789888000, 355687428096000, 6402373705728000][a];
            case "root":
                return Math.sqrt(a);
            case "log":
                return Math.log(a) / Math.LN10;
            case "ln":
                return Math.log(a);
            case "asin":
            case "acos":
            case "atan":
                return Math[operator](a) * 180 / Math.PI;
            case "unnatural":
                if(a < 0){
                    return 1 - (a - Math.floor(a));
                }else{
                    return a - Math.floor(a);
                }
            default:
                return Math[operator](a);
        }
    }
});
export const get_date = new Block({
    pack: basic,
    name: "get_date",
    template: "((operator)): number",
    func: ({operator}: {operator: string}) => {
        switch(operator){
            case "YEAR":
                return (new Date()).getFullYear();
            case "MONTH":
                return (new Date()).getMonth() + 1;
            case "DAY":
                return (new Date()).getDate();
            case "HOUR":
                return (new Date()).getHours();
            case "MINUTE":
                return (new Date()).getMinutes();
            case "SECOND":
                return (new Date()).getSeconds();
        }
    }
});