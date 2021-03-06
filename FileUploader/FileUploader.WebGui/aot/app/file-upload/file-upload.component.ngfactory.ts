/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '../../../app/pipes/datex.pipe';
import * as i2 from '../../../app/pipes/file-size.pipe';
import * as i3 from '../../../app/file-upload/file-upload.component';
import * as i4 from '../../node_modules/primeng/components/datatable/datatable.ngfactory';
import * as i5 from 'primeng/components/dom/domhandler';
import * as i6 from 'primeng/components/utils/objectutils';
import * as i7 from 'primeng/components/datatable/datatable';
import * as i8 from '../../node_modules/primeng/components/common/shared.ngfactory';
import * as i9 from 'primeng/components/common/shared';
import * as i10 from '../../../app/file-upload/file-upload.service';
import * as i11 from '@angular/http';
import * as i12 from '../../../app/message/message.service';
const styles_FileUploadComponent:any[] = ([] as any[]);
export const RenderType_FileUploadComponent:i0.RendererType2 = i0.ɵcrt({encapsulation:2,
    styles:styles_FileUploadComponent,data:{}});
function View_FileUploadComponent_1(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵted((null as any),['\n                '])),(_l()(),
      i0.ɵeld(0,(null as any),(null as any),2,'span',([] as any[]),(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
      ['',''])),i0.ɵppd(1),(_l()(),i0.ɵted((null as any),['\n            ']))],(null as any),
      (_ck,_v) => {
        const currVal_0:any = i0.ɵunv(_v,2,0,_ck(_v,3,0,i0.ɵnov((<any>_v.parent),0),
            _v.context.rowData[_v.context.$implicit.field]));
        _ck(_v,2,0,currVal_0);
      });
}
function View_FileUploadComponent_2(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵted((null as any),['\n                '])),(_l()(),
      i0.ɵeld(0,(null as any),(null as any),2,'span',([] as any[]),(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
      ['',''])),i0.ɵppd(1),(_l()(),i0.ɵted((null as any),['\n            ']))],(null as any),
      (_ck,_v) => {
        const currVal_0:any = i0.ɵunv(_v,2,0,_ck(_v,3,0,i0.ɵnov((<any>_v.parent),1),
            _v.context.rowData[_v.context.$implicit.field]));
        _ck(_v,2,0,currVal_0);
      });
}
function View_FileUploadComponent_3(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵted((null as any),['\n                '])),(_l()(),
      i0.ɵeld(0,(null as any),(null as any),1,'span',[['class','fa fa-times red'],
          ['data-placement','right'],['data-toggle','tooltip'],['title','Remove file']],
          (null as any),[[(null as any),'click']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:any = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co.removeFile(_v.context.rowIndex)) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n                '])),
      (_l()(),i0.ɵted((null as any),['\n            ']))],(null as any),(null as any));
}
export function View_FileUploadComponent_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[i0.ɵpid(0,i1.DateXPipe,([] as any[])),i0.ɵpid(0,i2.FileSizePipe,
      ([] as any[])),i0.ɵqud(402653184,1,{fileInput:0}),(_l()(),i0.ɵeld(0,(null as any),
      (null as any),9,'div',([] as any[]),(null as any),(null as any),(null as any),
      (null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n    '])),(_l()(),
      i0.ɵeld(0,[[1,0],['fileInput',1]],(null as any),0,'input',[['id','files'],['placeholder',
          'Upload file...'],['style','display:none'],['type','file']],[[8,'multiple',
          0]],[[(null as any),'change']],(_v,en,$event) => {
        var ad:boolean = true;
        var _co:i3.FileUploadComponent = _v.component;
        if (('change' === en)) {
          const pd_0:any = ((<any>_co.fileChangeEvent($event)) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n    '])),(_l()(),
      i0.ɵeld(0,(null as any),(null as any),1,'label',[['class','btn-animate green'],
          ['for','files']],(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i0.ɵted((null as any),['Add file'])),(_l()(),i0.ɵted((null as any),
      ['\n    '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'button',[['class',
      'btn-animate red'],['type','button']],(null as any),[[(null as any),'click']],
      (_v,en,$event) => {
        var ad:boolean = true;
        var _co:i3.FileUploadComponent = _v.component;
        if (('click' === en)) {
          const pd_0:any = ((<any>_co.resetFilesForUpload()) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['Reset files for upload'])),
      (_l()(),i0.ɵted((null as any),['\n'])),(_l()(),i0.ɵted((null as any),['\n\n'])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),49,'div',[['class','table-content']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n    '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          46,'p-dataTable',([] as any[]),(null as any),(null as any),(null as any),
          i4.View_DataTable_0,i4.RenderType_DataTable)),i0.ɵprd(512,(null as any),
          i5.DomHandler,i5.DomHandler,([] as any[])),i0.ɵprd(512,(null as any),i6.ObjectUtils,
          i6.ObjectUtils,([] as any[])),i0.ɵdid(14139392,(null as any),6,i7.DataTable,
          [i0.ElementRef,i5.DomHandler,i0.IterableDiffers,i0.Renderer2,i0.ChangeDetectorRef,
              i6.ObjectUtils,i0.NgZone],{resizableColumns:[0,'resizableColumns'],value:[1,
              'value']},(null as any)),i0.ɵqud(335544320,2,{header:0}),i0.ɵqud(335544320,
          3,{footer:0}),i0.ɵqud(603979776,4,{templates:1}),i0.ɵqud(603979776,5,{cols:1}),
      i0.ɵqud(335544320,6,{headerColumnGroup:0}),i0.ɵqud(335544320,7,{footerColumnGroup:0}),
      (_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),4,'p-column',[['field','name'],['header','Name']],(null as any),
          (null as any),(null as any),i8.View_Column_0,i8.RenderType_Column)),i0.ɵdid(1097728,
          [[5,4]],2,i9.Column,([] as any[]),{field:[0,'field'],header:[1,'header'],
              style:[2,'style']},(null as any)),i0.ɵqud(603979776,8,{templates:1}),
      i0.ɵqud(335544320,9,{template:0}),i0.ɵpod({'width':0}),(_l()(),i0.ɵted((null as any),
          ['\n        '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),8,'p-column',
          [['field','lastModified'],['header','LastModified']],(null as any),(null as any),
          (null as any),i8.View_Column_0,i8.RenderType_Column)),i0.ɵdid(1097728,[[5,
          4]],2,i9.Column,([] as any[]),{field:[0,'field'],header:[1,'header'],style:[2,
          'style']},(null as any)),i0.ɵqud(603979776,10,{templates:1}),i0.ɵqud(335544320,
          11,{template:0}),i0.ɵpod({'width':0}),(_l()(),i0.ɵted((null as any),['\n            '])),
      (_l()(),i0.ɵand(0,[[11,2]],(null as any),1,(null as any),View_FileUploadComponent_1)),
      i0.ɵdid(16384,[[10,4]],0,i9.PrimeTemplate,[i0.TemplateRef],{name:[0,'name']},
          (null as any)),(_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),i0.ɵted((null as any),
          ['\n        '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),8,'p-column',
          [['field','size'],['header','Size']],(null as any),(null as any),(null as any),
          i8.View_Column_0,i8.RenderType_Column)),i0.ɵdid(1097728,[[5,4]],2,i9.Column,
          ([] as any[]),{field:[0,'field'],header:[1,'header'],style:[2,'style']},
          (null as any)),i0.ɵqud(603979776,12,{templates:1}),i0.ɵqud(335544320,13,
          {template:0}),i0.ɵpod({'width':0}),(_l()(),i0.ɵted((null as any),['\n            '])),
      (_l()(),i0.ɵand(0,[[13,2]],(null as any),1,(null as any),View_FileUploadComponent_2)),
      i0.ɵdid(16384,[[12,4]],0,i9.PrimeTemplate,[i0.TemplateRef],{name:[0,'name']},
          (null as any)),(_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),i0.ɵted((null as any),
          ['\n        '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),8,'p-column',
          [['header','Remove']],(null as any),(null as any),(null as any),i8.View_Column_0,
          i8.RenderType_Column)),i0.ɵdid(1097728,[[5,4]],2,i9.Column,([] as any[]),
          {header:[0,'header'],sortable:[1,'sortable'],style:[2,'style']},(null as any)),
      i0.ɵqud(603979776,14,{templates:1}),i0.ɵqud(335544320,15,{template:0}),i0.ɵpod({'width':0,
          'text-align':1}),(_l()(),i0.ɵted((null as any),['\n            '])),(_l()(),
          i0.ɵand(0,[[15,2]],(null as any),1,(null as any),View_FileUploadComponent_3)),
      i0.ɵdid(16384,[[14,4]],0,i9.PrimeTemplate,[i0.TemplateRef],{name:[0,'name']},
          (null as any)),(_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),i0.ɵted((null as any),
          ['\n    '])),(_l()(),i0.ɵted((null as any),['\n'])),(_l()(),i0.ɵted((null as any),
          ['\n'])),(_l()(),i0.ɵeld(0,(null as any),(null as any),4,'div',([] as any[]),
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n    '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          1,'button',[['class','btn-animate blue btn-right'],['type','button']],(null as any),
          [[(null as any),'click']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:i3.FileUploadComponent = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co.upload()) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['Upload'])),
      (_l()(),i0.ɵted((null as any),['\n'])),(_l()(),i0.ɵted((null as any),['\n']))],
      (_ck,_v) => {
        var _co:i3.FileUploadComponent = _v.component;
        const currVal_1:any = true;
        const currVal_2:any = _co.filesToUpload;
        _ck(_v,19,0,currVal_1,currVal_2);
        const currVal_3:any = 'name';
        const currVal_4:any = 'Name';
        const currVal_5:any = _ck(_v,31,0,'52%');
        _ck(_v,28,0,currVal_3,currVal_4,currVal_5);
        const currVal_6:any = 'lastModified';
        const currVal_7:any = 'LastModified';
        const currVal_8:any = _ck(_v,37,0,'20%');
        _ck(_v,34,0,currVal_6,currVal_7,currVal_8);
        const currVal_9:any = 'body';
        _ck(_v,40,0,currVal_9);
        const currVal_10:any = 'size';
        const currVal_11:any = 'Size';
        const currVal_12:any = _ck(_v,47,0,'20%');
        _ck(_v,44,0,currVal_10,currVal_11,currVal_12);
        const currVal_13:any = 'body';
        _ck(_v,50,0,currVal_13);
        const currVal_14:any = 'Remove';
        const currVal_15:any = false;
        const currVal_16:any = _ck(_v,57,0,'8%','center');
        _ck(_v,54,0,currVal_14,currVal_15,currVal_16);
        const currVal_17:any = 'body';
        _ck(_v,60,0,currVal_17);
      },(_ck,_v) => {
        var _co:i3.FileUploadComponent = _v.component;
        const currVal_0:any = _co.multiple;
        _ck(_v,5,0,currVal_0);
      });
}
export function View_FileUploadComponent_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),2,'file-uploader',
      ([] as any[]),(null as any),(null as any),(null as any),View_FileUploadComponent_0,
      RenderType_FileUploadComponent)),i0.ɵprd(512,(null as any),i10.UploadService,
      i10.UploadService,[i11.Http]),i0.ɵdid(49152,(null as any),0,i3.FileUploadComponent,
      [i10.UploadService,i12.CustomMessageService],(null as any),(null as any))],(null as any),
      (null as any));
}
export const FileUploadComponentNgFactory:i0.ComponentFactory<i3.FileUploadComponent> = i0.ɵccf('file-uploader',
    i3.FileUploadComponent,View_FileUploadComponent_Host_0,{multiple:'multiple'},{},
    ([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiUDovRmlsZVVwbG9hZGVyL0ZpbGVVcGxvYWRlci5XZWJHdWkvYXBwL2ZpbGUtdXBsb2FkL2ZpbGUtdXBsb2FkLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9QOi9GaWxlVXBsb2FkZXIvRmlsZVVwbG9hZGVyLldlYkd1aS9hcHAvZmlsZS11cGxvYWQvZmlsZS11cGxvYWQuY29tcG9uZW50LnRzIiwibmc6Ly8vUDovRmlsZVVwbG9hZGVyL0ZpbGVVcGxvYWRlci5XZWJHdWkvYXBwL2ZpbGUtdXBsb2FkL2ZpbGUtdXBsb2FkLmh0bWwiLCJuZzovLy9QOi9GaWxlVXBsb2FkZXIvRmlsZVVwbG9hZGVyLldlYkd1aS9hcHAvZmlsZS11cGxvYWQvZmlsZS11cGxvYWQuY29tcG9uZW50LnRzLkZpbGVVcGxvYWRDb21wb25lbnRfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCI8ZGl2PlxyXG4gICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgaWQ9XCJmaWxlc1wiIHN0eWxlPVwiZGlzcGxheTpub25lXCIgI2ZpbGVJbnB1dCAoY2hhbmdlKT1cImZpbGVDaGFuZ2VFdmVudCgkZXZlbnQpXCIgcGxhY2Vob2xkZXI9XCJVcGxvYWQgZmlsZS4uLlwiIFttdWx0aXBsZV09XCJtdWx0aXBsZVwiIC8+XHJcbiAgICA8bGFiZWwgZm9yPVwiZmlsZXNcIiBjbGFzcz1cImJ0bi1hbmltYXRlIGdyZWVuXCI+QWRkIGZpbGU8L2xhYmVsPlxyXG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4tYW5pbWF0ZSByZWRcIiAoY2xpY2spPVwicmVzZXRGaWxlc0ZvclVwbG9hZCgpXCI+UmVzZXQgZmlsZXMgZm9yIHVwbG9hZDwvYnV0dG9uPlxyXG48L2Rpdj5cclxuXHJcbjxkaXYgY2xhc3M9XCJ0YWJsZS1jb250ZW50XCI+XHJcbiAgICA8cC1kYXRhVGFibGUgW3ZhbHVlXT1cImZpbGVzVG9VcGxvYWRcIiBbcmVzaXphYmxlQ29sdW1uc109XCJ0cnVlXCI+XHJcbiAgICAgICAgPHAtY29sdW1uIGZpZWxkPVwibmFtZVwiIGhlYWRlcj1cIk5hbWVcIiBbc3R5bGVdPVwieyd3aWR0aCc6JzUyJSd9XCI+PC9wLWNvbHVtbj5cclxuICAgICAgICA8cC1jb2x1bW4gZmllbGQ9XCJsYXN0TW9kaWZpZWRcIiBoZWFkZXI9XCJMYXN0TW9kaWZpZWRcIiBbc3R5bGVdPVwieyd3aWR0aCc6JzIwJSd9XCI+XHJcbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtY29sIGxldC1yb3c9XCJyb3dEYXRhXCIgcFRlbXBsYXRlPVwiYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e3tyb3dbY29sLmZpZWxkXSB8IGN1c3RvbURhdGV9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICA8L3AtY29sdW1uPlxyXG4gICAgICAgIDxwLWNvbHVtbiBmaWVsZD1cInNpemVcIiBoZWFkZXI9XCJTaXplXCIgW3N0eWxlXT1cInsnd2lkdGgnOicyMCUnfVwiPlxyXG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWNvbCBsZXQtcm93PVwicm93RGF0YVwiIHBUZW1wbGF0ZT1cImJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPnt7cm93W2NvbC5maWVsZF0gfCBmaWxlU2l6ZX19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgIDwvcC1jb2x1bW4+XHJcbiAgICAgICAgPHAtY29sdW1uIGhlYWRlcj1cIlJlbW92ZVwiIFtzb3J0YWJsZV09XCJmYWxzZVwiIFtzdHlsZV09XCJ7J3dpZHRoJzonOCUnLCAndGV4dC1hbGlnbic6J2NlbnRlcid9XCI+XHJcbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtY29sIGxldC1yb3c9XCJyb3dEYXRhXCIgbGV0LWk9XCJyb3dJbmRleFwiIHBUZW1wbGF0ZT1cImJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtdGltZXMgcmVkXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgKGNsaWNrKT1cInJlbW92ZUZpbGUoaSlcIiBkYXRhLXBsYWNlbWVudD1cInJpZ2h0XCIgdGl0bGU9XCJSZW1vdmUgZmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgIDwvcC1jb2x1bW4+XHJcbiAgICA8L3AtZGF0YVRhYmxlPlxyXG48L2Rpdj5cclxuPGRpdj5cclxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuLWFuaW1hdGUgYmx1ZSBidG4tcmlnaHRcIiAoY2xpY2spPVwidXBsb2FkKClcIj5VcGxvYWQ8L2J1dHRvbj5cclxuPC9kaXY+XHJcbiIsIjxmaWxlLXVwbG9hZGVyPjwvZmlsZS11cGxvYWRlcj4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQ1VvRSx1REFDcEQ7YUFBQTtVQUFBLDRDQUFNO01BQUEscUJBQXNDOztRQUF0QztZQUFBO1FBQUE7Ozs7b0JBSThDLHVEQUNwRDthQUFBO1VBQUEsNENBQU07TUFBQSxxQkFBb0M7O1FBQXBDO1lBQUE7UUFBQTs7OztvQkFJK0QsdURBQ3JFO2FBQUE7VUFBQTtVQUFBO1lBQUE7WUFBQTtZQUFvRDtjQUFBO2NBQUE7WUFBQTtZQUFwRDtVQUFBLGdDQUF1SDtNQUNoSDs7Ozt3REF0QnZCO01BQUE7TUFBQSw4QkFBSywyQ0FDRDthQUFBO1VBQUE7VUFBQTtRQUFBO1FBQUE7UUFBOEQ7VUFBQTtVQUFBO1FBQUE7UUFBOUQ7TUFBQSxnQ0FBc0osMkNBQ3RKO2FBQUE7VUFBQTtVQUFBLGdCQUE2Qyw2Q0FBZ0I7TUFBQSxhQUM3RDtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQThDO1VBQUE7VUFBQTtRQUFBO1FBQTlDO01BQUEsZ0NBQThFO01BQStCLHVDQUMzRztNQUVOO1VBQUE7TUFBMkIsMkNBQ3ZCO1VBQUE7cURBQUE7c0NBQUE7eUJBQUEsc0JBQUE7VUFBQTtzQ0FBQTtjQUFBO1VBQUE7YUFBQTtNQUErRCwrQ0FDM0Q7VUFBQTtVQUFBLDJFQUFBO1VBQUE7Y0FBQTthQUFBLGtDQUFxQyxjQUFxQztVQUFBLGlCQUMxRTtVQUFBO1VBQUEsNkRBQUE7VUFBQTtVQUFBO1VBQUEsd0JBQXFELGNBQTBCO01BQzNFO2FBQUE7VUFBQSxlQUVjLCtDQUNQO1VBQUEsaUJBQ1g7VUFBQTsrQ0FBQSxVQUFBO1VBQUE7VUFBQTtVQUFBLHFCQUFxQyxjQUEwQjtNQUMzRDthQUFBO1VBQUEsZUFFYywrQ0FDUDtVQUFBLGlCQUNYO1VBQUE7OEJBQUEsVUFBQTtVQUFBO2FBQUEsdUVBQTZDO1VBQUEsaUJBQWdELG1EQUN6RjtpQkFBQTthQUFBO1VBQUEsZUFHYywrQ0FDUDtVQUFBLGFBQ0QsdUNBQ1o7VUFBQSxTQUNOO1VBQUE7TUFBSywyQ0FDRDtVQUFBO1VBQUE7WUFBQTtZQUFBO1lBQXlEO2NBQUE7Y0FBQTtZQUFBO1lBQXpEO1VBQUEsZ0NBQTRFO01BQWUsdUNBQ3pGOzs7UUF0Qm1DO1FBQXhCO1FBQWIsWUFBcUMsVUFBeEIsU0FBYjtRQUNjO1FBQWE7UUFBYztRQUFyQyxZQUFVLFVBQWEsVUFBYyxTQUFyQztRQUNVO1FBQXFCO1FBQXNCO1FBQXJELFlBQVUsVUFBcUIsVUFBc0IsU0FBckQ7UUFDMkM7UUFBdkMsWUFBdUMsU0FBdkM7UUFJTTtRQUFhO1FBQWM7UUFBckMsWUFBVSxXQUFhLFdBQWMsVUFBckM7UUFDMkM7UUFBdkMsWUFBdUMsVUFBdkM7UUFJTTtRQUFnQjtRQUFtQjtRQUE3QyxZQUFVLFdBQWdCLFdBQW1CLFVBQTdDO1FBQzREO1FBQXhELFlBQXdELFVBQXhEOzs7UUFuQnNIO1FBQTlILFdBQThILFNBQTlIOzs7O29CQ0RKO01BQUE7b0NBQUE7d0JBQUEsbUJBQUE7TUFBQTs7Ozs7In0=
