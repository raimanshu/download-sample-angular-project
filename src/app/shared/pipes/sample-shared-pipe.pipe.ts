import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sampleSharedPipe'
})
export class SampleSharedPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
