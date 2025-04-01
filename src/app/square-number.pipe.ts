import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'squareNumber'
})
export class SquareNumberPipe implements PipeTransform {

  transform(n:number): number {
    return n*n;
  }

}
