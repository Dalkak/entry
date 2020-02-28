import { Block } from "dalkak";

export default new Block({
    name: "wait_second",
    template: "(second) 초 기다리기",
    func: async ({second}, project) => {
        await new Promise((o, x) => {
            setTimeout(o, second * 1000);
        });
    }
});