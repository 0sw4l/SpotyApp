import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinfoto'
})
export class SinfotoPipe implements PipeTransform {

  transform(value: any[]): string {

    let no_image = "assets/img/noimage.png"

    if (!value){
        return no_image;
    }

    return (value.length > 0) ? value[1].url : no_image;
  }

}
