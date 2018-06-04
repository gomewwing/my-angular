import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
  name: 'upper'
})
export class UpperText implements PipeTransform {
  transform(value: string): any {
    const sp: string[] = value.split(" ");
    let sumsp: string;
    sp.forEach(element => {
      const c = element.slice(0,1);
      if(sumsp === undefined) {
        sumsp = c.toUpperCase()+element.substring(1)+" ";
      } else {
        sumsp += (c.toUpperCase()+element.substring(1)+" ");
      }
    });
    return sumsp;
  }
}
