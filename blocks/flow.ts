import { Block } from "dalkak";

export const wait_second = new Block({
    name: "wait_second",
    template: "(second) 초 기다리기",
    func: async ({second}, project, local) => {
        await new Promise((o, x) => {
            setTimeout(o, second * 1000);
        });
    }
});
export const repeat_basic = new Block({
    name: "repeat_basic",
    template: "{ (n) 번 반복하기 {code} }",
    func: async ({n, code}, project, local) => {
        for(var i=0;i<n;i++){
            await code.run(project, local);
        }
    }
});
export const repeat_inf = new Block({
    name: "repeat_inf",
    template: "{ 계속 반복하기 {code} }",
    func: async ({code}, project, local) => {
        setInterval(async () => await code.run(project, local));
    }
});
export const repeat_while_true = new Block({
    name: "repeat_while_true",
    template: "{ <state>이 될 때까지 반복하기 {code} }",
    func: async ({state, code}, project, local) => {
        let loop = setInterval(async () => {
            await code.run(project, local);
            if(state){
                clearInterval(loop);
            }
        });
    }
});
export const _if = new Block({
    name: "_if",
    template: "{ 만일 <state>라면 {code} }",
    func: async ({state, code}, project, local) => {
        if(state){
            await code.run(project, local);
        }
    }
});
export const if_else = new Block({
    name: "if_else",
    template: "{ 만일 <state>라면 {code1} 아니면 {code2} }",
    func: async ({state, code1, code2}, project, local) => {
        if(state){
            await code1.run(project, local);
        }else{
            await code2.run(project, local);
        }
    }
});
export const wait_until_true = new Block({
    name: "wait_until_true",
    template: "{ <state>이 될 때까지 기다리기 }",
    func: async ({state}, project, local) => await new Promise( (o, x) => {
        let loop = setInterval(() => {
            if(state){
                clearInterval(loop);
                o();
            }
        });
    })
});