import { async, TestBed } from '@angular/core/testing';
import { ModalAdultComponent } from './modal-adult.component';
describe('ModalAdultComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ModalAdultComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ModalAdultComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=modal-adult.component.spec.js.map