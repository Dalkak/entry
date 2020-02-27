import {
    Extension,
    Block,
    Event,
} from "dalkak";

import message_cast from "./blocks/message_cast";

export default new Extension({
    name: "entry-start",
    color: 0x00B400, // Background color of blocks
    blocks: {
        message_cast
    },
    events: {
        when_run_button_click: new Event("when_run_button_click")
    },
    on: {
        run(){
            this.events.when_run_button_click.fire();
        }
    },
});