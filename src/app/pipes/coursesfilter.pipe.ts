import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'coursesFilter'})
export class CoursesFilterPipe implements PipeTransform {
    transform(value: any[], args: string): any[] {
        let filterText: string = args ? args.toLocaleLowerCase() : null;
        return filterText ? value.filter((issue) =>
            issue.courseName.toLocaleLowerCase().includes(filterText) != false) : value;
    }
}