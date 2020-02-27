import {
    Extension,
    Block,
} from "dalkak";

export default new Extension({
    name: "extension name",
    color: 0xDE5C04, // Background color of blocks
    blocks: {
        block: new Block({
            name: "block name",
            template: "{example (input)}",
            func: ({input}, project) => {

            }
        }),
    },
});