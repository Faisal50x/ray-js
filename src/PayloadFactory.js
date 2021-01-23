import CustomPayload from "./payloads/CustomPayload";
import LogPayload from "./payloads/LogPayload";

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

        if(!Array.isArray(value) && typeof value == 'object') {
            return CustomPayload(value, "Object");
        }

        return LogPayload(value);
    }


}