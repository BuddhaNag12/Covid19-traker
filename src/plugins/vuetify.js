import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
         dark: false,
        themes: {
          light: {
            primary: colors.lightBlue,
            secondary: colors.grey.darken1,
            accent: colors.blueGrey,
            error: colors.red.accent3,
          },
          dark: {
            primary: colors.shades.black,
            accent:colors.shades.black
          },
        },
      },
});
