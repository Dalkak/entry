import { Block } from "dalkak";
import basic from "@dalkak/basic"

export const get_variable = new Block({
    name: "get_variable",
    template: "((name) 값)",
    func: ({name}, project) => {
        return project.variables.value[name].value;
    }
});
export const change_variable = new Block({
    pack: basic,
    name: "change_variable",
    template: "{(name)에 (value: number)만큼 더하기}",
    func: ({name, value}, project) => {
        project.variables.value[name].value += value;
    }
});
export const set_variable = new Block({
    pack: basic,
    name: "set_variable",
    template: "{(name)를 (value)로 정하기}",
    func: ({name, value}, project) => {
        project.variables.value[name].value = value;
    }
});
export const value_of_index_from_list = new Block({
    pack: basic,
    name: "value_of_index_from_list",
    template: "((name)의 (index: number)번째 항목)",
    func: ({name, index}, project) => {
        return project.variables.value[name].value[index - 1];
    }
});
export const add_value_to_list = new Block({
    name: "add_value_to_list",
    template: "{(value) 항목을 (name)에 추가하기}",
    func: ({name, value}, project) => {
        project.variables.value[name].value.push(value);
    }
});
export const remove_value_from_list = new Block({
    pack: basic,
    name: "remove_value_from_list",
    template: "{(index: number) 번째 항목을 (name)에서 삭제하기}",
    func: ({name, index}, project) => {
        project.variables.value[name].value.splice(index - 1, 1);
    }
});
export const insert_value_to_list = new Block({
    pack: basic,
    name: "insert_value_to_list",
    template: "{(value)을 (name)의 (index: number)번째에 넣기}",
    func: ({name, index, value}, project) => {
        project.variables.value[name].value.splice(index - 1, 0, value);
    }
});
export const change_value_list_index = new Block({
    pack: basic,
    name: "change_value_list_index",
    template: "{(name) (index: number)번째 항목을 (value)로 바꾸기기}",
    func: ({name, index, value}, project) => {
        project.variables.value[name].value[index - 1] = value;
    }
});
export const length_of_list = new Block({
    pack: basic,
    name: "length_of_list",
    template: "((name) 항목 수): number",
    func: ({name}, project) => {
        return project.variables.value[name].value.length;
    }
});
export const is_included_in_list = new Block({
    name: "is_included_in_list",
    template: "<(name)에 (value)이 포함되어 있는가?>",
    func: ({name, value}, project) => {
        return project.variables.value[name].value.includes(value);
    }
});