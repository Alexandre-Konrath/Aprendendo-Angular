import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sqrt'
})
export class SqrtPipe implements PipeTransform {

  public transform(value: number): number {
    return Math.sqrt(value);
  }
}
