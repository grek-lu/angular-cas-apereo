import { Injectable } from '@angular/core';
import xml2js from 'xml2js'

@Injectable()
export class XmlConvertService {

  constructor() { }

  convertToJson(data: string): Object {
    let res
    xml2js.parseString(data, { explicitArray: false }, (error, result) => {
      if (error) {
        throw new Error(error)
      } else {
        res = result
      }
    })
    return res
  }

  convertToXml(rootObject:Object) {
    return new xml2js.Builder().buildObject(rootObject);
  }

}
