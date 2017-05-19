"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var auth_1 = require("./entities/auth");
var WelcomeComponent = (function () {
    function WelcomeComponent() {
        this.cv = new core_1.EventEmitter();
    }
    WelcomeComponent.prototype.changeView = function () {
        this.cv.emit('');
    };
    return WelcomeComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", auth_1.Auth)
], WelcomeComponent.prototype, "user", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], WelcomeComponent.prototype, "cv", void 0);
WelcomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'welcome-user',
        templateUrl: 'welcome.html'
    })
], WelcomeComponent);
exports.WelcomeComponent = WelcomeComponent;