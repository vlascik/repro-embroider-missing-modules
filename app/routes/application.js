import { BufferedChangeset } from 'validated-changeset';
import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  model() {
    return new BufferedChangeset({ name: 'Peter'});
  }
}
