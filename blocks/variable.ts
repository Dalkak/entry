import { Block, Variable } from "dalkak";
import basic from "@dalkak/basic"

export const get_variable = new Block({
    name: "get_variable",
    template: "((name) 값)",
    func: ({name}, project, local, {Entry}) => {
        const variable = local.getVariable(Entry.idList[name]);
        return variable.value ?? (variable.value = 0);
    }
});
export const change_variable = new Block({
    pack: basic,
    name: "change_variable",
    template: "{(name)에 (value: number)만큼 더하기}",
    func: ({name, value}, project, local, {Entry}) => {
        const variable = local.getVariable(Entry.idList[name]);
        variable.value ?? (variable.value = 0);
        variable.value += Number(value);
    }
});
export const set_variable = new Block({
    pack: basic,
    name: "set_variable",
    template: "{(name)를 (value)로 정하기}",
    func: ({name, value}, project, local, {Entry}) => {
        const variable = local.getVariable(Entry.idList[name]);
        variable.value ?? (variable.value = 0);
        variable.value = value;
    }
});
export const value_of_index_from_list = new Block({
    pack: basic,
    name: "value_of_index_from_list",
    template: "((name)의 (index: number)번째 항목)",
    func: ({name, index}, project, local, {Entry}) => {
        const variable = local.getVariable(Entry.idList[name]);
        variable.value ?? (variable.value = []);
        return variable.value[index - 1];
    }
});
export const add_value_to_list = new Block({
    name: "add_value_to_list",
    template: "{(value) 항목을 (name)에 추가하기}",
    func: ({name, value}, project, local, {Entry}) => {
        const variable = local.getVariable(Entry.idList[name]);
        variable.value ?? (variable.value = []);
        variable.value.push(value);
    }
});
export const remove_value_from_list = new Block({
    pack: basic,
    name: "remove_value_from_list",
    template: "{(index: number) 번째 항목을 (name)에서 삭제하기}",
    func: ({name, index}, project, local, {Entry}) => {
        const variable = local.getVariable(Entry.idList[name]);
        variable.value ?? (variable.value = []);
        variable.value.splice(index - 1, 1);
    }
});
export const insert_value_to_list = new Block({
    pack: basic,
    name: "insert_value_to_list",
    template: "{(value)을 (name)의 (index: number)번째에 넣기}",
    func: ({name, index, value}, project, local, {Entry}) => {
        const variable = local.getVariable(Entry.idList[name]);
        variable.value ?? (variable.value = []);
        variable.value.splice(index - 1, 0, value);
    }
});
export const change_value_list_index = new Block({
    pack: basic,
    name: "change_value_list_index",
    template: "{(name) (index: number)번째 항목을 (value)로 바꾸기}",
    func: ({name, index, value}, project, local, {Entry}) => {
        const variable = local.getVariable(Entry.idList[name]);
        variable.value ?? (variable.value = []);
        variable.value[index - 1] = value;
    }
});
export const length_of_list = new Block({
    pack: basic,
    name: "length_of_list",
    template: "((name) 항목 수): number",
    func: ({name}, project, local, {Entry}) => {
        const variable = local.getVariable(Entry.idList[name]);
        variable.value ?? (variable.value = []);
        return variable.value.length;
    }
});
export const is_included_in_list = new Block({
    name: "is_included_in_list",
    template: "<(name)에 (value)이 포함되어 있는가?>",
    func: ({name, value}, project, local, {Entry}) => {
        const variable = local.getVariable(Entry.idList[name]);
        variable.value ?? (variable.value = []);
        return variable.value.includes(value);
    }
});