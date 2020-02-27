import {
    Extension,
    Block,
} from "dalkak";

import message_cast from "./blocks/message_cast";

export default new Extension({
    name: "entry-start",
    color: 0x00B400, // Background color of blocks
    blocks: {
        message_cast
    },
});