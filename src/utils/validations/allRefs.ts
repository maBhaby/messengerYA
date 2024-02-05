import { BaseInput } from "@/components";
import { RefType } from "@/services/Block";

// type ObjectType = Record<string, BaseInput>
interface ObjectType extends RefType {
  [key: string]: BaseInput;
}

export const validateAllRefs = (obj: ObjectType) => {
  Object.entries(obj).forEach(([, val]) => {
    if ((val as BaseInput).getValue() === null) {
      throw new Error("ошибка валидации");
    }
  });
};
