'user strict';
import Base from './base.js';
export default class extends Base{
    async accountAction() {
        return this.display();
    }
    async authAction() {
        return this.display();
    }
    async adminAction() {
        return this.display();
    }
}