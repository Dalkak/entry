import {
    Extension,
    Block,
    Event,
} from "dalkak";

import {message_cast} from "./blocks/start";

export const start = new Extension({
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

import * as flowBlock from "./blocks/flow";

export const flow = new Extension({
    name: "entry-flow",
    color: 0x17A6D1, // Background color of blocks
    blocks: flowBlock,
    events: {

    },
});