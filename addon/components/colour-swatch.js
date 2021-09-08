import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../templates/components/colour-swatch';

export default Component.extend({
  layout,
  classNames: ['colour-swatch'],
  classNameBindings: ['selected:active'],
  attributeBindings: ['swatchBackgroundStyle:style'],

  swatchBackgroundStyle: computed('swatchColour', function() {
    var colour = this.swatchColour;
    var style = `background: #${colour}`;
    var escapedStyle = style.htmlSafe();
    return escapedStyle;
  }),
});

