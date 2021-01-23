import dayjs from 'dayjs';
import LogPayload from "./payloads/LogPayload";
import CustomPayload from "./payloads/CustomPayload";
import DayjsPayload from "./payloads/DayjsPayload";

export default class PayloadFactory {

    values;

    constructor(values) {
        this.values = values;
    }

    static createForValues($arguments) {
        return new PayloadFactory($arguments).getPayloads();
    }

    getPayloads() {
        return this.values.map(value => this.getPayload(value));
    }

    getPayload(value) {

        if (value === null) {
            return CustomPayload(null, 'Null');
        }

        if(typeof value == 'boolean') {
            return CustomPayload(value, 'Boolean');
        }
        const dayJs = dayjs(value);

        if (dayJs.isValid()) {
            return DayjsPayload(value);
        }

        if(!Array.isArray(value) && typeof value == 'object') {
            return CustomPayload(value, "Object");
        }


        return LogPayload(value);
    }


}