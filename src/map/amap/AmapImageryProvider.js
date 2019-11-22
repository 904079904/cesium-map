/*
 * @Author: Caven
 * @Date: 2019-06-13 11:08:30
 * @Last Modified by: Caven
 * @Last Modified time: 2019-08-03 15:42:41
 */

const IMG_URL = 'https://webst04.is.autonavi.com/appmaptile?style=6&x={z}&y={y}&z={z}'
const ELEC_URL = 'http://webrd03.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}'
class AmapImageryProvider extends Cesium.UrlTemplateImageryProvider {
  constructor(options = {}) {
    options['url'] = options.style === 'img' ? IMG_URL : ELEC_URL
    super(options)
  }
}
export default AmapImageryProvider
