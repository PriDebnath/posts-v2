import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getColor',
  standalone: false,
})
export class GetColorPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    let colors: string[] = ['lime', 'purple', 'orange', 'skyblue', 'pink'];
    let randomIndex = Math.round(Math.random() * colors.length - 1);
    return colors[randomIndex];
  }
}
