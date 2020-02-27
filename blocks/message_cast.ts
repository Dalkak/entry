import { Block } from "dalkak";

export default new Block({
    name: "message_cast",
    template: "(msg) 신호 보내기",
    func: ({msg}, project) => {
        project.events.value[msg].fire(project);
    }
});