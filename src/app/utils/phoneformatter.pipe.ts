import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneformatter'
})
export class PhoneformatterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(args=="US"){
      return this.usPhoneFormat(value);
    }
    else if(args=="IN"){
      return this.indianPhoneFormat(value);
    }
    return value;
  }
  usPhoneFormat(value:any){
var formattedPhone= value.substring(0,3)+"-"+value.substring(3,6)+"-"+value.substring(6,10);
    return formattedPhone;
  }
  indianPhoneFormat(value:any){
var formattedPhone= value.substring(0,5)+"-"+value.substring(5,10);
return formattedPhone;
  }

  

}