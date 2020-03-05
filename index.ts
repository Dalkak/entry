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
    color: 0x17A6D1, 
    blocks: flowBlock,
});
import * as movingBlock from "./blocks/moving";
export const moving = new Extension({
    name: "entry-moving",
    color: 0xAD3EFB, 
    blocks: movingBlock,
});
import * as judgementBlock from "./blocks/judgement";
export const judgement = new Extension({
    name: "entry-judgement",
    color: 0x4562F5, 
    blocks: judgementBlock,
});
import * as calcBlock from "./blocks/calc";
export const calc = new Extension({
    name: "entry-calc",
    color: 0xF4AF18, 
    blocks: calcBlock,
});
import * as variableBlock from "./blocks/variable";
export const variable = new Extension({
    name: "entry-variable",
    color: 0xDD47D8, 
    blocks: variableBlock,
});
import * as entryBlock from "./blocks/entry";
export const entry = new Extension({
    name: "entry-entry",
    blocks: entryBlock,
});