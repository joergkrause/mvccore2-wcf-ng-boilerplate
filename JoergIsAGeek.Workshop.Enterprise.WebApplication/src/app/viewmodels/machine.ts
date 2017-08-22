import { Display, Required } from 'svogv';

import { Base } from './base';

export class Machine extends Base {

  @Display('Machine Name', 10)
  @Required()
  name: string = '';

  @Display('Location', 20)
  @Required()
  location: string = '';


}
