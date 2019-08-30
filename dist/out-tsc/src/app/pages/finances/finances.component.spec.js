import { async, TestBed } from '@angular/core/testing';
import { FinancesComponent } from './finances.component';
describe('FinancesComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [FinancesComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(FinancesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=finances.component.spec.js.map