import {  Pipe,PipeTransform } from "@angular/core";

@Pipe({
    name:'convertToSpacePipe'
})

export class ConvertToSpacePipe implements PipeTransform{
    transform(value: string, character: string) :string{
       return '';
    }

}