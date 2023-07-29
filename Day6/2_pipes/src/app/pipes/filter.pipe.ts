import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: string[] | undefined, args = ""): string[] | [] {
  if (value)
    return value.filter((item) => item.toLowerCase().startsWith(args.toLowerCase()));
  else
    return [];
}
}
