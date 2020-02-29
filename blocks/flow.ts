import { Block } from "dalkak";

export const wait_second = new Block({
    name: "wait_second",
    template: "(second) 초 기다리기",
    func: async ({second}, project) => {
        await new Promise((o, x) => {
            setTimeout(o, second * 1000);
        });
    }
});

export const repeat_basic = new Block({
    name: "repeat_basic",
    template: "{ (n) 번 반복하기 {code} }",
    func: async ({n, code}, project) => {
        for(var i=0;i<n;i++){
            await code.run();
        }
    }
});

export const repeat_inf = new Block({
    name: "repeat_inf",
    template: "{ 계속 반복하기 {code} }",
    func: async ({code}, project) => {
        setInterval(async () => await code.run());
    }
});