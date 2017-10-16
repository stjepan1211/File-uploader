import { Pipe, PipeTransform } from '@angular/core';
declare var moment: any;

@Pipe({ name: 'customDate' })
export class DateXPipe implements PipeTransform {
    transform(unixTimestamp: number): string {
        var time = moment(unixTimestamp).format("DD.MM.YYYY. HH:mm");
        return time;
    }
}