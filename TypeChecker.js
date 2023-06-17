// used when we want to perform strict check on types
import { typeErrorMessage } from "../Exceptions/TypeErrorMessage";

// base datatypes that can be checked using the typeof operator
export const dataTypes = [ 'string','number','boolean','object'];

// function to check the type of a value
const IsType = (value, type) => {
  if (dataTypes.includes(type))
    return typeof value === type;
  else {
    switch(type)
    {
        // common primitives and other custom types can be added
        case 'integer':
            return Number.isInteger(value);
        case 'double':
            return typeof value === "number" && !Number.isNaN(value);
    }
  }
};

export const assertType = (value, type, className = null) => {
  if (!IsType(value, type)) throw new Error( typeErrorMessage(value, type, className));
}

// alternatively we can also check that class an object belongs to? should this be under a different lib?
export const IsInstanceOf = (className, obj) => {
    return obj instanceof className;
}
