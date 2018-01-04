var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let MyApp = class MyApp extends Polymer.Element {
    constructor() {
        super(...arguments);
        this.activePage = 'one';
    }
};
__decorate([
    property(),
    __metadata("design:type", String)
], MyApp.prototype, "activePage", void 0);
MyApp = __decorate([
    customElement('my-app')
], MyApp);
//# sourceMappingURL=my-app.js.map