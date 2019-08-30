import { async, TestBed } from '@angular/core/testing';
import { ModalDisciplineComponent } from './modal-discipline.component';
describe('ModalDisciplineComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ModalDisciplineComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ModalDisciplineComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=modal-discipline.component.spec.js.map