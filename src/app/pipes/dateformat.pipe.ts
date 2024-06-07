import { Pipe, PipeTransform } from "@angular/core";
import * as moment from "moment";

@Pipe({
  name: "dateformat",
})
export class DateformatPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    if (!value) return value;
    const format = args[0] || "MMMM Do YYYY, h:mm:ss a";
    return moment(value).format(format);
  }
}
