import { BaseInput } from "@/components";
import { RefType } from "@/services/Block";

// type ObjectType = Record<string, BaseInput>
interface ObjectType extends RefType {
  [key: string]: BaseInput
}

export const validateAllRefs = (obj: ObjectType) => {
  console.log(obj);
  
  const result = Object.values(obj).map((val) => {
    debugger
    return val.props.validate?.(val.value)
  })

  return result.find((el) => {
    debugger
    return el
  })
}
