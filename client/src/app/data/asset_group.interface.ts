export interface IAssetGroup{
    id: string,
    assetId: string,
    MIT: [number], /*Mandatory group item type numbers */
    MI: [number], /**Mandatory group item numbers */
    RI: [number], /**Recommended group item numbers */
    RIT: [number], /**Recommended group item type numbers */
}