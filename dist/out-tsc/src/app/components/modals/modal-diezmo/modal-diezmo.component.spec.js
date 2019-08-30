import { async, TestBed } from '@angular/core/testing';
import { ModalDiezmoComponent } from './modal-diezmo.component';
describe('ModalDiezmoComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ModalDiezmoComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ModalDiezmoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=modal-diezmo.component.spec.js.map