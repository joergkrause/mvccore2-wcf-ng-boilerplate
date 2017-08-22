import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'site-pageheader',
  templateUrl: './sitepageheader.html',
  styleUrls: ['./sitepageheader.css']
})
export class SitePageHeader {
  @Input() heading: string;
  @Input() icon: string;
}
