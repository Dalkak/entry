import { Block } from "dalkak";
import basic from "@dalkak/basic";

export const text = new Block({
    name: "text",
    template: "((text))",
    func: ({text}) => {
        return text;
    }
});
export const number = new Block({
    pack: basic,
    name: "number",
    template: "((num: number)): number",
    func: ({num}) => {
        return num;
    }
});
export const True = new Block({
    name: "True",
    template: "<참>",
    func: () => {
        return true;
    }
});
export const False = new Block({
    name: "False",
    template: "<거짓>",
    func: () => {
        return false;
    }
});