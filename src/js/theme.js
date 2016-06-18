import * as colorManipulator from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';
import * as colors from 'material-ui/styles/colors';

export default {
  spacing: spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: colors.blueA200,
    primary2Color: colors.blueA400,
    primary3Color: colors.blueA600,
    accent1Color: colors.pinkA200,
    accent2Color: colors.pinkA400,
    accent3Color: colors.pinkA600,
    textColor: colors.black,
    alternateTextColor: colors.fullWhite,
    canvasColor: colors.grey50,
    borderColor: (0, colorManipulator.fade)(colors.fullWhite, 0.3),
    disabledColor: (0, colorManipulator.fade)(colors.fullWhite, 0.3),
    pickerHeaderColor: (0, colorManipulator.fade)(colors.fullWhite, 0.12),
    clockCircleColor: (0, colorManipulator.fade)(colors.fullWhite, 0.12)
  }
};
