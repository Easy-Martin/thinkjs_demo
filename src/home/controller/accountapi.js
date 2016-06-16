'user strict'
import Base from './base.js';
export default class extends Base {
  async accountAction() {
    let parse = this.post();
    let data = await this.model('accountapi').getList(parse);
    return this.json(data);

  }
  async detailAction() {
    let parse = this.post();
    let data = await this.model('userinfo').where({
      'user_id': parse.user_id
    }).find();
    return this.json(data);
  }

}
