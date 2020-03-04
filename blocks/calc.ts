import { Block, Thing } from "dalkak";
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
    template: "(현재 (operator)): number",
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
export const distance_something = new Block({
    pack: basic,
    name: "distance_something",
    template: "((value) 까지의 거리 (_target: Thing))",
    func: ({value, _target}: {value: string, _target: Thing}, project) => {
        let valueThing = project.thingGroup.children.find(thing => thing.name == value);
        return Math.sqrt(
            Math.pow(valueThing.pos.x - _target.pos.x, 2) +
            Math.pow(valueThing.pos.y - _target.pos.y, 2)
        );
    }
});
export const length_of_string = new Block({
    name: "length_of_string",
    template: "((value)의 글자 수)",
    func: ({value}) => value.length
});
export const combine_something = new Block({
    name: "combine_something",
    template: "((a) 과 (b)를 합치기)",
    func: ({a, b}) => a + b
});
export const char_at = new Block({
    pack: basic,
    name: "char_at",
    template: "((value)의 (n: number)번째 글자)",
    func: ({value, n}) => value[n]
});
export const substring = new Block({
    pack: basic,
    name: "substring",
    template: "((value)의 (a: number)번째 글자부터 (b: number)번째 글자까지의 글자)",
    func: ({value, a, b}: {value: string, a: number, b: number}) => value.substring(Math.min(a, b), Math.max(a, b) + 1)
});
export const index_of_string = new Block({
    pack: basic,
    name: "index_of_string",
    template: "((str)에서 (target)의 시작 위치)",
    func: ({str, target}: {str: string, target: string}) => str.indexOf(target) + 1
});
export const replace_string = new Block({
    name: "replace_string",
    template: "((value)의 (a)를 (b)로 바꾸기)",
    func: ({value, a, b}: {value: string, a: string, b: string}) => value.replace(a, b)
});
export const change_string_case = new Block({
    name: "change_string_case",
    template: "((value)의 (option))",
    func: ({value, option}: {value: string, option: string}) => value[option]()
});