/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { DateTimeFormat} from './DateTimeFormat.pipe';

describe('Pipe: DateTimeFormate', () => {
  it('create an instance', () => {
    let pipe = new DateTimeFormat("teste");
    expect(pipe).toBeTruthy();
  });
});
