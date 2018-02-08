import { StyleSheet } from 'react-native';
import * as defaultStyle from '../style';

const STYLESHEET_ID = 'stylesheet.calendar.main';

export default function getStyle(theme = {}) {
  const appStyle = { ...defaultStyle, ...theme };
  return StyleSheet.create({
    container: {
      paddingLeft: 5,
      paddingRight: 5,
      flex: 1,
      backgroundColor: appStyle.calendarBackground,
    },
    week: {
      marginTop: 7,
      marginBottom: 7,
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    yearRow: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    yearText: {
      fontSize: appStyle.textYearFontSize,
      fontFamily: appStyle.textYearFontFamily,
      fontWeight: '300',
      color: appStyle.yearTextColor,
    },
    yearSelected: {
      backgroundColor: appStyle.textSecondaryColor,
    },
    yearTextSelected: {
      color: 'white',
    },
    ...(theme[STYLESHEET_ID] || {}),
  });
}
