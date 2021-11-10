import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wysiwyg-demo';
  textFromEditor = '';

  // Editor options & customization
  public content: string = '';
  public options: Object = {
    placeholderText: 'Add Your Description Here!',
    charCounterCount: false,
    quickInsertEnabled: false,
    toolbarBottom: true,
    fontSizeSelection: true,
    fontFamilySelection: true,
    colorsStep: 14,
    fontFamily: {
      'Overpass,sans-serif' : 'Overpass',
      'Arial,Helvetica,sans-serif': 'Arial',
      'Impact,Charcoal,sans-serif': 'Impact',
      'Tahoma,Geneva,sans-serif': 'Tahoma',
      'Calibri, Helvetica,sans-serif': 'Calibri'
    },
    fontSize: ['8', '10', '12', '14', '16', '18', '20'],
    toolbarButtons: {
      'moreText': {
        'buttons': ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', 'textColor', 'backgroundColor', 'inlineClass', 'inlineStyle', 'clearFormatting']
      },
      'moreParagraph': {
        'buttons': ['alignLeft', 'alignCenter', 'formatOLSimple', 'alignRight', 'alignJustify', 'formatOL', 'formatUL', 'paragraphFormat', 'paragraphStyle', 'lineHeight', 'outdent', 'indent']
      },
      'moreRich': {},
      'moreMisc': {

        'buttons': ['undo', 'redo'],

        'align': 'right',

        'buttonsVisible': 2

      }
    }

  }
}
