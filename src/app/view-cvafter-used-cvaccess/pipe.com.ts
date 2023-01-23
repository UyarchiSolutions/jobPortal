import { Pipe, PipeTransform } from '@angular/core';

import { DomSanitizer, SafeHtml, SafeResourceUrl, SafeScript, SafeStyle, SafeUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safemode',
})
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  // transform(url: any, type: any): SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl  {
  //   console.log(url, type);
  //   return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  // }
  transform(value: string, type: string): SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl {
    console.log(type);
    switch (type) {
      case 'html':
        return this.sanitizer.bypassSecurityTrustHtml(value);
      case 'style':
        return this.sanitizer.bypassSecurityTrustStyle(value);
      case 'script':
        return this.sanitizer.bypassSecurityTrustScript(value);
      case 'url':
        return this.sanitizer.bypassSecurityTrustUrl(value);
      case 'resourceUrl':
        return this.sanitizer.bypassSecurityTrustResourceUrl(value);
      default:
        return this.sanitizer.bypassSecurityTrustHtml(value);
    }
  }
}

