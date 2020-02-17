import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'featuresFilter'})
export class FeaturesFilterPipe implements PipeTransform {
    transform(value: any[], args: string): any[] {
        let filterText: string = args ? args.toLocaleLowerCase() : null;
        return filterText ? value.filter((issue) =>
            issue.Name.toLocaleLowerCase().includes(filterText) != false) : value;
    }
}