import { LoginComponent } from './login.component';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 

describe('LoginComponent', () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          BrowserModule,
          FormsModule,
          ReactiveFormsModule,
          HttpClientModule
        ],
        declarations: [
          LoginComponent
        ],
      }).compileComponents();
    }));
    

    it('should create the app', () => {
        const fixture = TestBed.createComponent(LoginComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
      });

});