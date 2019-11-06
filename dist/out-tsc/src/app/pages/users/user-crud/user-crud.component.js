var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import Swal from "sweetalert2";
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { UserService } from "src/app/services";
var UserCrudComponent = /** @class */ (function () {
    function UserCrudComponent(fb, toastr, userService) {
        this.fb = fb;
        this.toastr = toastr;
        this.userService = userService;
        this.loading = false;
        this.submitted = false;
        this.closeCreate = new EventEmitter();
        this.createForm();
    }
    UserCrudComponent.prototype.ngOnInit = function () {
        this.allRoles();
    };
    Object.defineProperty(UserCrudComponent.prototype, "f", {
        get: function () {
            return this.form.controls;
        },
        enumerable: true,
        configurable: true
    });
    UserCrudComponent.prototype.close = function () {
        this.closeCreate.emit();
    };
    UserCrudComponent.prototype.load = function () {
        var _this = this;
        this.userService.getById(this.id).subscribe(function (res) {
            _this.myPacthValue(res.data);
        }, function (err) {
            _this.onFailure(err);
        });
    };
    UserCrudComponent.prototype.myPacthValue = function (resp) {
        this.loading = false;
        this.form.patchValue(resp);
    };
    UserCrudComponent.prototype.ngOnChanges = function (changes) {
        if (changes["id"].currentValue) {
            this.loading = true;
            this.load();
        }
        else {
            this.resetForm();
        }
    };
    UserCrudComponent.prototype.onSave = function () {
        var _this = this;
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        this.userService.updateUser(this.form.value).subscribe(function () {
            _this.onSuccess();
            _this.close();
        }, function (err) {
            _this.onFailure(err);
        });
    };
    UserCrudComponent.prototype.allRoles = function () {
        var _this = this;
        this.userService.getRoles().subscribe(function (res) {
            _this.roles = res.data;
        });
    };
    UserCrudComponent.prototype.createForm = function () {
        this.form = this.fb.group({
            id: [""],
            name: ["", Validators.required],
            lastname: ["", [Validators.required]],
            email: ["", [Validators.required]],
            password: ["12345"],
            role: ["", [Validators.required]],
            birthday: ["", [Validators.required]],
            address: [""],
            phone: [""],
            status: [true, Validators.required]
        });
    };
    UserCrudComponent.prototype.onSuccess = function () {
        this.toastr.success("Operación exitosa..", "", {
            timeOut: 1000
        });
    };
    UserCrudComponent.prototype.onFailure = function (err) {
        Swal.fire({
            type: "error",
            title: err.code,
            text: err.error.errors
        });
    };
    UserCrudComponent.prototype.resetForm = function () {
        this.form.reset();
        this.form.patchValue({
            active: true
        });
    };
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], UserCrudComponent.prototype, "id", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], UserCrudComponent.prototype, "closeCreate", void 0);
    UserCrudComponent = __decorate([
        Component({
            selector: "app-user-crud",
            templateUrl: "./user-crud.component.html",
            styleUrls: ["./user-crud.component.scss"]
        }),
        __metadata("design:paramtypes", [FormBuilder,
            ToastrService,
            UserService])
    ], UserCrudComponent);
    return UserCrudComponent;
}());
export { UserCrudComponent };
//# sourceMappingURL=user-crud.component.js.map