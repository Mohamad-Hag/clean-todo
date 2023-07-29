import _ from "lodash";

/**
 * Checks if the variable is empty, and that's according to its type:
 * 1. **string**: `null` / `empty string`, eg: ""
 * 2. **number**: `0`
 * 3. **boolean**: `false`
 * 4. **object**: `empty object`, eg: { }
 * 5. **undefined**: `undefined`
 * 6. **array**: `empty array`, eg: [ ]
 * 7. **function**: `always false`
 *
 * Otherwise, it will returns false.
 * @param variable The variable of any type
 * @returns A boolean indicates if the given variable is empty.
 */
function isEmpty(variable: unknown): boolean {
  if (Array.isArray(variable)) return variable.length === 0;
  else if (typeof variable === "string")
    return variable === "" || variable === null;
  else if (typeof variable === "number") return variable === 0;
  else if (typeof variable === "boolean") return variable === false;
  else if (typeof variable === "object")
    return Object.keys(variable as {}).length === 0;
  else if (typeof variable === "undefined") return true;
  else if (typeof variable === "function") return false;

  return false;
}

export default isEmpty;
