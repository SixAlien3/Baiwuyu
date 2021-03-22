import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], searchText_c: string, filedName_c: string, searchText_p: string, filedName_p: string): any[] {
        if (!items) { return []; }

        if (!searchText_c && !searchText_p) { 
            return items; 
        }else if (!searchText_c) {
            return items.filter(item => {
                if (item && item[filedName_p]) {
                    return item[filedName_p].toLowerCase() === searchText_p.toLowerCase();
                }
                return false;
            });
        }else if (!searchText_p) {
            return items.filter(item => {
                if (item && item[filedName_c]) {
                    return item[filedName_c].toLowerCase() === searchText_c.toLowerCase();
                }
                return false;
            });
        }else {
            return items.filter(item => {
                if (item && item[filedName_c] && item[filedName_p]) {
                    return item[filedName_c].toLowerCase() === searchText_c.toLowerCase() && item[filedName_p].toLowerCase() === searchText_p.toLowerCase();
                }
                return false;
            });
        }
    }
}