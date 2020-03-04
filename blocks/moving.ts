import { Block, Thing } from "dalkak";
import basic from "@dalkak/basic";

export const move_x = new Block({
    pack: basic,
    name: "move_x",
    template: "x 좌표를 (value: number)만큼 바꾸기 (_target: Thing)",
    func: ({value, _target}: {value: number, _target: Thing}) => {
        _target.pos.x += value;
    }
});
export const move_y = new Block({
    pack: basic,
    name: "move_y",
    template: "y 좌표를 (value: number)만큼 바꾸기 (_target: Thing)",
    func: ({value, _target}: {value: number, _target: Thing}) => {
        _target.pos.y += value;
    }
});
export const locate_x = new Block({
    pack: basic,
    name: "locate_x",
    template: "x: (value: number) 위치로 이동하기 (_target: Thing)",
    func: ({value, _target}: {value: number, _target: Thing}) => {
        _target.pos.x = value;
    }
});
export const locate_y = new Block({
    pack: basic,
    name: "locate_y",
    template: "y: (value: number) 위치로 이동하기 (_target: Thing)",
    func: ({value, _target}: {value: number, _target: Thing}) => {
        _target.pos.y = value;
    }
});
export const locate_xy = new Block({
    pack: basic,
    name: "locate_xy",
    template: "x: (xValue: number) y: (yValue: number) 위치로 이동하기 (_target: Thing)",
    func: ({xValue, yValue, _target}: {xValue: number, yValue: number, _target: Thing}) => {
        _target.pos.x = xValue;
        _target.pos.y = yValue;
    }
});
export const locate = new Block({
    pack: basic,
    name: "locate",
    template: "(value) 위치로 이동하기 (_target: Thing)",
    func: ({value, _target}: {value: string, _target: Thing}, project) => {
        let valueThing = project.thingGroup.children.find(thing => thing.name == value);
        _target.pos.x = valueThing.pos.x;
        _target.pos.y = valueThing.pos.y;
    }
});