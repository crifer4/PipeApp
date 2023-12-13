
import { Pipe, PipeTransform } from "@angular/core";

//fernando | togglecase = 'FERNANDO'
// FERNANDO | togglecase = 'fernando'

@Pipe({
  name: 'toggleCase'
})
export class ToggleCasePipe implements PipeTransform {

  transform( value: string, toUpper: boolean = false ): string {
    return ( toUpper )
    ? value.toUpperCase()
    : value.toLowerCase();
  }
}
