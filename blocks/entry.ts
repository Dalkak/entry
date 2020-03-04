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
    template: "((num: number))",
    func: ({num}) => {
        return num;
    }
});