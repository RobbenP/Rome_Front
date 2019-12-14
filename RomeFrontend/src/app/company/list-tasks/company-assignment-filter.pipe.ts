import { Pipe, PipeTransform } from '@angular/core';
import { Assignment } from 'src/app/models/assignment.model';

@Pipe({
  name: 'companyAssignmentFilter',
  pure: false
})
export class CompanyAssignmentFilterPipe implements PipeTransform {

  transform(assignments: Assignment[], filter: any): any {
    if (!assignments || !filter){
      return assignments;
    }
    return assignments.filter(assignment => assignment.naam.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
  }

}
