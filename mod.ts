import { Moment, MomentFormatSpecification, MomentInput } from "./moment.d.ts";
import m from "https://jspm.dev/moment@2.29.1";

interface M {
  (inp?: MomentInput, strict?: boolean): Moment;
  (
    inp?: MomentInput,
    format?: MomentFormatSpecification,
    strict?: boolean,
  ): Moment;
  (
    inp?: MomentInput,
    format?: MomentFormatSpecification,
    language?: string,
    strict?: boolean,
  ): Moment;
}

const moment = m as M;
export { moment };
