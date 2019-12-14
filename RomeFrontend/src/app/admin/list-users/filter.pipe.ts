import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../../models/user.model';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(users: User[], filter: any): any {
    if (!users || !filter){
      return users;
    }
    return users.filter(user => user.username.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
  }

}
