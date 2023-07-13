import { ControlBase } from "./controlBase-model";

export class Checkbox extends ControlBase<string> {
    override controlType = 'checkbox';
}