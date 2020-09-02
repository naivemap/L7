import { Map } from '@antv/l7-maps';
import BaseMapWrapper from '../BaseMapWrapper';
import MapboxService from './map';
export default class MapboxWrapper extends BaseMapWrapper<Map> {
  protected getServiceConstructor() {
    return MapboxService;
  }
}
