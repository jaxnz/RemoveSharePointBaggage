import {
  BaseApplicationCustomizer
} from '@microsoft/sp-application-base';


export interface IRemoveSharepointBaggageApplicationCustomizerProperties {
  // This is an example; replace with your own property
  testMessage: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class RemoveSharepointBaggageApplicationCustomizer
  extends BaseApplicationCustomizer<IRemoveSharepointBaggageApplicationCustomizerProperties> {

  public onInit(): Promise<void> {
    document.head.innerHTML += `<style>#spSiteHeader {display: none;} #spCommandBar {display: none;} .sp-appBar {display: none;} #O365_NavHeader {padding-bottom: 5px;} footer {display: none;}</style>`;
    return Promise.resolve();
  }
}
