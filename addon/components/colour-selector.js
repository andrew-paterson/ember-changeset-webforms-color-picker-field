import Component from '@ember/component';
import layout from '../templates/components/colour-selector';

export default Component.extend({
  layout,
  init() {
    this._super(...arguments);
    this.swatchColours = [
      ['ffffff', 'bbbbbb', '777777', '444444', '000000'],
      ['F69779', 'F26B4F', 'F11E2D', '9D0B0E', '790100'],
      ['FAAD81', 'F68D56', 'F36523', 'A1420C', '7B2F00'],
      ['FDC78B', 'FBAE5C', 'F8931D', 'A2620A', '7D4900'],
      ['FEF89A', 'FFF567', 'FEF200', 'ABA101', '837A01'],
      ['C5E09D', 'ADD272', '8DC73D', '598428', '406619'],
      ['A2D29E', '7CC576', '3AB54B', '1A7A30', '006021'],
      ['82C99D', '3BB779', '00A650', '007237', '005925'],
      ['7CCDC7', '1ABBB5', '02A99F', '00736C', '005950'],
      ['6ED0F7', '04BFF4', '04ADEE', '0275A2', '015B7E'],
      ['7EA6D9', '458CCA', '0272BA', '024B80', '013564'],
      ['8392CB', '5675B8', '0356A6', '013571', '01215A'],
      ['8783BE', '855FA8', '652D90', '450F63', '33004B'],
      ['A185BF', '8060AC', '652D90', '450F63', '33004B'],
      ['BC8CC0', 'A963A9', '92278F', '640360', '4C004A'],
      ['F39BC1', 'F06EAA', 'EC018C', '9F005D', '7A0146'],
      ['F5999E', 'F36C7B', 'EE155A', '9E003A', '790125']
    ];
  },
  actions: {
    toggleCustomColours(arg) {
      this.toggleProperty('selectCustomColour', arg);
    }
  }
});
