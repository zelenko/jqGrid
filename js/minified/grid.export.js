/**
*
* @license Guriddo jqGrid JS - v5.1.1 
* Copyright(c) 2008, Tony Tomov, tony@trirand.com
* 
* License: http://guriddo.net/?page_id=103334
*/
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery","./grid.base","./jquery.fmatter","./grid.utils"],a):a(jQuery)}(function(a){"use strict";a.jgrid=a.jgrid||{},a.extend(a.jgrid,{formatCell:function(b,c,d,e,f){var g;if(void 0!==e.formatter){var h={rowId:"",colModel:e,gid:f.p.id,pos:c,styleUI:""};g=a.isFunction(e.formatter)?e.formatter.call(f,b,h,d):a.fmatter?a.fn.fmatter.call(f,e.formatter,b,h,d):b}else g=b;return g},formatCellCsv:function(a,b){a=null==a?"":String(a);try{a=a.replace(b._regexsep,b.separatorReplace).replace(/\r\n/g,b.replaceNewLine).replace(/\n/g,b.replaceNewLine)}catch(c){a=""}return b.escquote&&(a=a.replace(b._regexquot,b.escquote+b.quote)),(-1===a.indexOf(b.separator)||-1===a.indexOf(b.qoute))&&(a=b.quote+a+b.quote),a},excelCellPos:function(a){for(var b="A".charCodeAt(0),c="Z".charCodeAt(0),d=c-b+1,e="";a>=0;)e=String.fromCharCode(a%d+b)+e,a=Math.floor(a/d)-1;return e},makeNode:function(b,c,d){var e=b.createElement(c);return d&&(d.attr&&a(e).attr(d.attr),d.children&&a.each(d.children,function(a,b){e.appendChild(b)}),d.text&&e.appendChild(b.createTextNode(d.text))),e},xmlToZip:function(b,c){var d,e,f,g,h,i,j=this,k=new XMLSerializer,l=-1===k.serializeToString(a.parseXML(a.jgrid.excelStrings["xl/worksheets/sheet1.xml"])).indexOf("xmlns:r"),m=[];a.each(c,function(c,n){if(a.isPlainObject(n))d=b.folder(c),j.xmlToZip(d,n);else{if(l){for(e=n.childNodes[0],f=e.attributes.length-1;f>=0;f--){var o=e.attributes[f].nodeName,p=e.attributes[f].nodeValue;-1!==o.indexOf(":")&&(m.push({name:o,value:p}),e.removeAttribute(o))}for(f=0,g=m.length;g>f;f++)h=n.createAttribute(m[f].name.replace(":","_dt_b_namespace_token_")),h.value=m[f].value,e.setAttributeNode(h)}i=k.serializeToString(n),l&&(-1===i.indexOf("<?xml")&&(i='<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'+i),i=i.replace(/_dt_b_namespace_token_/g,":")),i=i.replace(/<row xmlns="" /g,"<row ").replace(/<cols xmlns="">/g,"<cols>").replace(/<mergeCells xmlns="" /g,"<mergeCells "),b.file(c,i)}})},excelStrings:{"_rels/.rels":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>',"xl/_rels/workbook.xml.rels":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>',"[Content_Types].xml":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="xml" ContentType="application/xml" /><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml" /><Default Extension="jpeg" ContentType="image/jpeg" /><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml" /><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml" /><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml" /></Types>',"xl/workbook.xml":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><fileVersion appName="xl" lastEdited="5" lowestEdited="5" rupBuild="24816"/><workbookPr showInkAnnotation="0" autoCompressPictures="0"/><bookViews><workbookView xWindow="0" yWindow="0" windowWidth="25600" windowHeight="19020" tabRatio="500"/></bookViews><sheets><sheet name="" sheetId="1" r:id="rId1"/></sheets></workbook>',"xl/worksheets/sheet1.xml":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"><sheetData/></worksheet>',"xl/styles.xml":'<?xml version="1.0" encoding="UTF-8"?><styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"><fonts count="5" x14ac:knownFonts="1"><font><sz val="11" /><name val="Calibri" /></font><font><sz val="11" /><name val="Calibri" /><color rgb="FFFFFFFF" /></font><font><sz val="11" /><name val="Calibri" /><b /></font><font><sz val="11" /><name val="Calibri" /><i /></font><font><sz val="11" /><name val="Calibri" /><u /></font></fonts><fills count="6"><fill><patternFill patternType="none" /></fill><fill/><fill><patternFill patternType="solid"><fgColor rgb="FFD9D9D9" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FFD99795" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="ffc6efce" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="ffc6cfef" /><bgColor indexed="64" /></patternFill></fill></fills><borders count="2"><border><left /><right /><top /><bottom /><diagonal /></border><border diagonalUp="false" diagonalDown="false"><left style="thin"><color auto="1" /></left><right style="thin"><color auto="1" /></right><top style="thin"><color auto="1" /></top><bottom style="thin"><color auto="1" /></bottom><diagonal /></border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" /></cellStyleXfs><cellXfs count="2"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/></cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0" /></cellStyles><dxfs count="0" /><tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4" /></styleSheet>'}}),a.jgrid.extend({exportToCsv:function(b){b=a.extend(!0,{separator:",",separatorReplace:" ",quote:'"',escquote:'"',newLine:"\r\n",replaceNewLine:" ",includeCaption:!0,includeLabels:!0,includeGroupHeader:!0,includeFooter:!0,fileName:"jqGridExport.csv",mimetype:"text/csv;charset=utf-8",returnAsString:!1},b||{});var c="";return this.each(function(){function d(b,c){function d(a,b,c){var d,e=!1;if(0===b)e=c[a];else{var f=c[a].idx;if(0===f)e=c[a];else for(d=a;d>=0;d--)if(c[d].idx===f-b){e=c[d];break}}return e}function e(b,e,f,g){var h,i,m=d(b,e,f),n=m.cnt,o=new Array(c.collen),p=0;for(i=g;l>i;i++)if(!k[i].hidden){var q="{0}";a.each(m.summary,function(){if(this.nm===k[i].name){k[i].summaryTpl&&(q=k[i].summaryTpl),"string"==typeof this.st&&"avg"===this.st.toLowerCase()&&(this.sd&&this.vd?this.v=this.v/this.vd:this.v&&n>0&&(this.v=this.v/n));try{this.groupCount=m.cnt,this.groupIndex=m.dataIndex,this.groupValue=m.value,h=j.formatter("",this.v,i,this)}catch(b){h=this.v}return o[p]=a.jgrid.formatCellCsv(a.jgrid.stripHtml(a.jgrid.template(q,h)),c),!1}}),p++}return o}var f="",g=j.p.groupingView,h=[],i=g.groupField.length,k=j.p.colModel,l=k.length,m=0;a.each(k,function(a,b){var c;for(c=0;i>c;c++)if(g.groupField[c]===b.name){h[c]=a;break}});var n,o,p=a.makeArray(g.groupSummary);return p.reverse(),a.each(g.groups,function(d,l){m++;try{n=a.isArray(g.formatDisplayField)&&a.isFunction(g.formatDisplayField[l.idx])?g.formatDisplayField[l.idx].call(j,l.displayValue,l.value,j.p.colModel[h[l.idx]],l.idx,g):j.formatter("",l.displayValue,h[l.idx],l.value)}catch(q){n=l.displayValue}var r="";r=a.isFunction(g.groupText[l.idx])?g.groupText[l.idx].call(j,n,l.cnt,l.summary):a.jgrid.template(g.groupText[l.idx],n,l.cnt,l.summary),"string"!=typeof r&&"number"!=typeof r&&(r=n);var s;s="header"===g.groupSummaryPos[l.idx]?e(d,0,g.groups,0):new Array(c.collen),s[0]=a.jgrid.formatCellCsv(a.jgrid.stripHtml(r),c),f+=s.join(c.separator)+c.newLine;var t=i-1===l.idx;if(t){var u,v,w,x=g.groups[d+1],y=0,z=l.startRow,A=void 0!==x?x.startRow:g.groups[d].startRow+g.groups[d].cnt;for(u=z;A>u&&b[u-y];u++){for(w=b[u-y],o=0,v=0;v<k.length;v++)k[v].hidden||(s[o]=a.jgrid.formatCellCsv(a.jgrid.formatCell(w[k[v].name],v,w,k[v],j),c),o++);f+=s.join(c.separator)+c.newLine}if("header"!==g.groupSummaryPos[l.idx]){var B;if(void 0!==x){for(B=0;B<g.groupField.length&&x.dataIndex!==g.groupField[B];B++);m=g.groupField.length-B}for(v=0;m>v;v++)p[v]&&(s=e(d,v,g.groups,0),f+=s.join(c.separator)+c.newLine);m=B}}}),f}b._regexsep=new RegExp(b.separator,"g"),b._regexquot=new RegExp(b.quote,"g");var e,f,g,h,i,j=this,k=this.addLocalData(!0),l=k.length,m=j.p.colModel,n=m.length,o=0,p="",q="",r="",s="",t="",u=[],v=[],w={};if(a.each(m,function(c,d){"cb"!==d.name&&"rn"!==d.name||d.hidden||(v.push(c),d.hidden=!0),d.hidden||(u.push(a.jgrid.formatCellCsv(d.label||d.name,b)),w[d.name]=d.label||d.name)}),b.includeLabels&&(t=u.join(b.separator)+b.newLine),b.collen=u.length,j.p.grouping)p+=d(k,b);else for(;l>o;){for(f=k[o],g=[],h=0,e=0;n>e;e++)m[e].hidden||(g[h]=a.jgrid.formatCellCsv(a.jgrid.formatCell(f[m[e].name],e,f,m[e],j),b),h++);p+=g.join(b.separator)+b.newLine,o++}if(k=null,g=new Array(b.collen),b.includeCaption&&j.p.caption){for(o=b.collen;--o;)g[o]="";g[0]=a.jgrid.formatCellCsv(j.p.caption,b),q+=g.join(b.separator)+b.newLine}if(b.includeGroupHeader&&j.p.groupHeader&&j.p.groupHeader.length){var x=j.p.groupHeader;for(e=0;e<x.length;e++){var y=x[e].groupHeaders;o=0,g=[];for(i in w)if(w.hasOwnProperty(i)){for(g[o]="",h=0;h<y.length;h++)y[h].startColumnName===i&&(g[o]=y[h].titleText);o++}r+=g.join(b.separator)+b.newLine}}if(b.includeFooter&&j.p.footerrow){var z=a(".ui-jqgrid-ftable",this.sDiv);if(z.length){var A=z[0].rows[0];for(e=0,o=0,g=[];e<A.cells.length;){var B=A.cells[e],C=a(B).attr("aria-describedby").slice(-3);B.hidden||"_cb"===C||"_rn"===C||(g[o]=a.jgrid.formatCellCsv(a(B).text(),b),o++),e++}s+=g.join(b.separator)+b.newLine}}for(c=q+r+t+p+s,e=0;e<v.length;e++)m[v[e]].hidden=!1}),b.returnAsString?c:void jqGridUtils.saveAs(c,b.fileName,{type:b.mimetype})},exportToExcel:function(b){b=a.extend(!0,{includeLabels:!0,includeGroupHeader:!0,includeFooter:!0,fileName:"jqGridExport.xlsx",mimetype:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",maxlength:40},b||{}),this.each(function(){function c(b){function c(a,b,c){var d,e=!1;if(0===b)e=c[a];else{var f=c[a].idx;if(0===f)e=c[a];else for(d=a;d>=0;d--)if(c[d].idx===f-b){e=c[d];break}}return e}function d(b,d,g,h){var i,k,m=c(b,d,g),n=m.cnt,p=e(o.header[0]);for(k=h;j>k;k++)if(!l[k].hidden){var q="{0}";a.each(m.summary,function(){if(this.nm===l[k].name){l[k].summaryTpl&&(q=l[k].summaryTpl),"string"==typeof this.st&&"avg"===this.st.toLowerCase()&&(this.sd&&this.vd?this.v=this.v/this.vd:this.v&&n>0&&(this.v=this.v/n));try{this.groupCount=m.cnt,this.groupIndex=m.dataIndex,this.groupValue=m.value,i=f.formatter("",this.v,k,this)}catch(b){i=this.v}return p[this.nm]=a.jgrid.stripHtml(a.jgrid.template(q,i)),!1}})}return p}function e(a){var b={};for(var c in a)a.hasOwnProperty(c)&&(b[c]="");return b}var g=f.p.groupingView,h=[],i=g.groupField.length,j=l.length,k=0;a.each(l,function(a,b){var c;for(c=0;i>c;c++)if(g.groupField[c]===b.name){h[c]=a;break}});var m,n=a.makeArray(g.groupSummary);n.reverse(),a.each(g.groups,function(c,j){k++;try{m=a.isArray(g.formatDisplayField)&&a.isFunction(g.formatDisplayField[j.idx])?g.formatDisplayField[j.idx].call(f,j.displayValue,j.value,f.p.colModel[h[j.idx]],j.idx,g):f.formatter("",j.displayValue,h[j.idx],j.value)}catch(l){m=j.displayValue}var p="";p=a.isFunction(g.groupText[j.idx])?g.groupText[j.idx].call(f,m,j.cnt,j.summary):a.jgrid.template(g.groupText[j.idx],m,j.cnt,j.summary),"string"!=typeof p&&"number"!=typeof p&&(p=m);var q;q="header"===g.groupSummaryPos[j.idx]?d(c,0,g.groups,0):e(o.header[0]);var s=Object.keys(q);q[s[0]]=a.jgrid.stripHtml(new Array(5*j.idx).join(" ")+p),r(q,!0);var t=i-1===j.idx;if(t){var u,v,w=g.groups[c+1],x=0,y=j.startRow,z=void 0!==w?w.startRow:g.groups[c].startRow+g.groups[c].cnt;for(u=y;z>u&&b[u-x];u++){var A=b[u-x];r(A,!1)}if("header"!==g.groupSummaryPos[j.idx]){var B;if(void 0!==w){for(B=0;B<g.groupField.length&&w.dataIndex!==g.groupField[B];B++);k=g.groupField.length-B}for(v=0;k>v;v++)n[v]&&(q=d(c,v,g.groups,0),r(q,!0));k=B}}})}var d,e,f=this,g=a.jgrid.excelStrings,h=0,i=a.parseXML(g["xl/worksheets/sheet1.xml"]),j=i.getElementsByTagName("sheetData")[0],k={_rels:{".rels":a.parseXML(g["_rels/.rels"])},xl:{_rels:{"workbook.xml.rels":a.parseXML(g["xl/_rels/workbook.xml.rels"])},"workbook.xml":a.parseXML(g["xl/workbook.xml"]),"styles.xml":a.parseXML(g["xl/styles.xml"]),worksheets:{"sheet1.xml":i}},"[Content_Types].xml":a.parseXML(g["[Content_Types].xml"])},l=f.p.colModel,m=0,n={},o={body:f.addLocalData(!0),header:[],footer:[],width:[],map:[]};for(d=0,e=l.length;e>d;d++)l[d].hidden||"cb"===l[d].name||"rn"===l[d].name||(n[l[d].name]=l[d].label||l[d].name,o.width[m]=5,o.map[m]=d,m++);o.header.push(n);var p,q,r=function(c,d){p=h+1,q=a.jgrid.makeNode(i,"row",{attr:{r:p}});var e=0;for(var g in o.header[0])if(o.header[0].hasOwnProperty(g)){var k,m=a.jgrid.excelCellPos(e)+""+p,n=c[g];if(null==n&&(n=""),d||(n=""!==n?a.jgrid.formatCell(n,o.map[e],c,l[o.map[e]],f):n),o.width[e]=Math.max(o.width[e],Math.min(parseInt(n.length,10),b.maxlength)),"number"==typeof n||n.match&&a.trim(n).match(/^-?\d+(\.\d+)?$/)&&!a.trim(n).match(/^0\d+/))k=a.jgrid.makeNode(i,"c",{attr:{t:"n",r:m},children:[a.jgrid.makeNode(i,"v",{text:n})]});else{var r=n.replace?a.jgrid.htmlEncode(n):n;k=a.jgrid.makeNode(i,"c",{attr:{t:"inlineStr",r:m},children:{row:a.jgrid.makeNode(i,"is",{children:{row:a.jgrid.makeNode(i,"t",{text:r})}})}})}e++,q.appendChild(k)}j.appendChild(q),h++};if(a("sheets sheet",k.xl["workbook.xml"]).attr("name",b.sheetName),b.includeGroupHeader&&f.p.groupHeader&&f.p.groupHeader.length){var s=f.p.groupHeader,t=[],u=0;for(m=0;m<s.length;m++){var v=s[m].groupHeaders,w={};d=0,u++;for(var x in o.header[0])if(o.header[0].hasOwnProperty(x)){w[x]="";for(var y=0;y<v.length;y++)if(v[y].startColumnName===x){w[x]=v[y].titleText;var z=a.jgrid.excelCellPos(d)+u,A=a.jgrid.excelCellPos(d+v[y].numberOfColumns-1)+u;t.push({ref:z+":"+A})}d++}r(w,!0)}var B=a.jgrid.makeNode(i,"mergeCells",{attr:{count:t.length}});for(a("worksheet",i).append(B),m=0;m<t.length;m++)B.appendChild(a.jgrid.makeNode(i,"mergeCell",{attr:t[m]}))}if(b.includeLabels&&(r(o.header[0],!0),a("row c",i).attr("s","2")),f.p.grouping)c(o.body);else for(var C=0,D=o.body.length;D>C;C++)r(o.body[C],!1);if(b.includeFooter||f.p.footerrow){o.footer=a(f).jqGrid("footerData","get");for(m in o.footer)o.footer.hasOwnProperty(m)&&(o.footer[m]=a.jgrid.stripHtml(o.footer[m]));r(o.footer,!0),a("row:last c",i).attr("s","2")}var E=a.jgrid.makeNode(i,"cols");for(a("worksheet",i).prepend(E),m=0,e=o.width.length;e>m;m++)E.appendChild(a.jgrid.makeNode(i,"col",{attr:{min:m+1,max:m+1,width:o.width[m],customWidth:1}}));o=null;try{var F=new JSZip,G={type:"blob",mimeType:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"};a.jgrid.xmlToZip(F,k),F.generateAsync?F.generateAsync(G).then(function(a){jqGridUtils.saveAs(a,b.fileName,{type:b.mimetype})}):jqGridUtils.saveAs(F.generate(G),b.fileName,{type:b.mimetype})}catch(H){throw H}})},exportToPdf:function(b){return b=a.extend(!0,{title:null,orientation:"portrait",pageSize:"A4",description:null,customSettings:null,download:"download",includeLabels:!0,includeGroupHeader:!0,includeFooter:!0,fileName:"jqGridExport.pdf",mimetype:"application/pdf"},b||{}),this.each(function(){function c(b){function c(b,c){var d=0,e=[];for(var f in m)m.hasOwnProperty(f)&&(k={text:null==b[f]?"":c?a.jgrid.formatCell(b[f]+"",o[d],l[n],q[o[d]],h):b[f],alignment:r[f],style:"tableBody"},e.push(k),d++);return e}function d(a,b,c){var d,e=!1;if(0===b)e=c[a];else{var f=c[a].idx;if(0===f)e=c[a];else for(d=a;d>=0;d--)if(c[d].idx===f-b){e=c[d];break}}return e}function e(b,c,e,g){var i,j,k=d(b,c,e),l=k.cnt,n=f(m);for(j=g;s>j;j++)if(!q[j].hidden){var o="{0}";a.each(k.summary,function(){if(this.nm===q[j].name){q[j].summaryTpl&&(o=q[j].summaryTpl),"string"==typeof this.st&&"avg"===this.st.toLowerCase()&&(this.sd&&this.vd?this.v=this.v/this.vd:this.v&&l>0&&(this.v=this.v/l));try{this.groupCount=k.cnt,this.groupIndex=k.dataIndex,this.groupValue=k.value,i=h.formatter("",this.v,j,this)}catch(b){i=this.v}return n[this.nm]=a.jgrid.stripHtml(a.jgrid.template(o,i)),!1}})}return n}function f(a){var b={};for(var c in a)a.hasOwnProperty(c)&&(b[c]="");return b}var g=h.p.groupingView,j=[],p=g.groupField.length,q=h.p.colModel,s=q.length,t=0;a.each(q,function(a,b){var c;for(c=0;p>c;c++)if(g.groupField[c]===b.name){j[c]=a;break}});var u,v=a.makeArray(g.groupSummary);v.reverse(),a.each(g.groups,function(d,k){t++;try{u=a.isArray(g.formatDisplayField)&&a.isFunction(g.formatDisplayField[k.idx])?g.formatDisplayField[k.idx].call(h,k.displayValue,k.value,h.p.colModel[j[k.idx]],k.idx,g):h.formatter("",k.displayValue,j[k.idx],k.value)}catch(l){u=k.displayValue}var n="";n=a.isFunction(g.groupText[k.idx])?g.groupText[k.idx].call(h,u,k.cnt,k.summary):a.jgrid.template(g.groupText[k.idx],u,k.cnt,k.summary),"string"!=typeof n&&"number"!=typeof n&&(n=u);var o;o="header"===g.groupSummaryPos[k.idx]?e(d,0,g.groups,0):f(m);var q=Object.keys(o);o[q[0]]=a.jgrid.stripHtml(new Array(5*k.idx).join(" ")+n),i.push(c(o,!1));var r=p-1===k.idx;if(r){var s,w,x=g.groups[d+1],y=0,z=k.startRow,A=void 0!==x?x.startRow:g.groups[d].startRow+g.groups[d].cnt;for(s=z;A>s&&b[s-y];s++){var B=b[s-y];i.push(c(B,!0))}if("header"!==g.groupSummaryPos[k.idx]){var C;if(void 0!==x){for(C=0;C<g.groupField.length&&x.dataIndex!==g.groupField[C];C++);t=g.groupField.length-C}for(w=0;t>w;w++)v[w]&&(o=e(d,w,g.groups,0),i.push(c(o,!1)));t=C}}})}var d,e,f,g,h=this,i=[],j=h.p.colModel,k={},l=h.addLocalData(!0),m={},n=0,o=[],p=[],q=[],r={};for(d=0,e=j.length;e>d;d++)j[d].hidden||"cb"===j[d].name||"rn"===j[d].name||(k={text:j[d].label||j[d].name,style:"tableHeader"},p.push(k),m[j[d].name]=j[d].label||j[d].name,o[n]=d,q.push(j[d].width),r[j[d].name]=j[d].align||"left",n++);var s;if(b.includeGroupHeader&&h.p.groupHeader&&h.p.groupHeader.length)for(s=h.p.groupHeader,n=0;n<s.length;n++){var t=[],u=s[n].groupHeaders;for(f in m)if(m.hasOwnProperty(f)){for(k={text:"",style:"tableHeader"},g=0;g<u.length;g++)u[g].startColumnName===f&&(k={text:u[g].titleText,colSpan:u[g].numberOfColumns,style:"tableHeader"});t.push(k),d++}i.push(t)}if(b.includeLabels&&i.push(p),h.p.grouping)c(l);else{var v;for(n=0,e=l.length;e>n;n++){g=0,p=[],v=l[n];for(f in m)m.hasOwnProperty(f)&&(k={text:null==v[f]?"":a.jgrid.formatCell(v[f]+"",o[g],l[n],j[o[g]],h),alignment:r[f],style:"tableBody"},p.push(k),g++);i.push(p)}}if(b.includeFooter&&h.p.footerrow){var w=a(h).jqGrid("footerData","get");p=[];for(f in m)m.hasOwnProperty(f)&&(k={text:a.jgrid.stripHtml(w[f]),style:"tableFooter",alignment:r[f]},p.push(k));i.push(p)}var x={pageSize:b.pageSize,pageOrientation:b.orientation,content:[{style:"tableExample",widths:q,table:{headerRows:null!=s?0:1,body:i}}],styles:{tableHeader:{bold:!0,fontSize:11,color:"#2e6e9e",fillColor:"#dfeffc",alignment:"center"},tableBody:{fontSize:10},tableFooter:{bold:!0,fontSize:11,color:"#2e6e9e",fillColor:"#dfeffc"},title:{alignment:"center",fontSize:15},description:{}},defaultStyle:{fontSize:10}};b.description&&x.content.unshift({text:b.description,style:"description",margin:[0,0,0,12]}),b.title&&x.content.unshift({text:b.title,style:"title",margin:[0,0,0,12]}),b.customSettings&&b.customSettings.call(h,x);try{var y=pdfMake.createPdf(x);"open"===b.download?y.open():y.getBuffer(function(a){jqGridUtils.saveAs(a,b.fileName,{type:b.mimetype})})}catch(z){throw z}})}})});