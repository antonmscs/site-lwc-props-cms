import { LightningElement, api } from 'lwc';

export default class PropertiesCMSImage extends LightningElement {
    @api
    name

    @api
    showHiddenMessage
  
    @api
    hiddenMessageSize
  
    @api
    hiddenMessageColor
  
    @api
    cmsImage
  
    get classes() {
      return 'hidden-message ' + this.hiddenMessageSize + ' ' + this.hiddenMessageColor
    }
  
    get cmsImageLink() {
      return '/sfsites/c/cms/delivery/media/' + this.cmsImage
    }
  
    connectedCallback() {
      
    }
}