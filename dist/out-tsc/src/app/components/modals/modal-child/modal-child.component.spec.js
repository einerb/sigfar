import { async, TestBed } from '@angular/core/testing';
import { ModalChildComponent } from './modal-child.component';
describe('ModalChildComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ModalChildComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ModalChildComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=modal-child.component.spec.js.map