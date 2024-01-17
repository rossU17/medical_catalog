import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogArticleEditorComponent } from './dialog-article-editor.component';

describe('DialogArticleEditorComponent', () => {
  let component: DialogArticleEditorComponent;
  let fixture: ComponentFixture<DialogArticleEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogArticleEditorComponent]
    });
    fixture = TestBed.createComponent(DialogArticleEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
