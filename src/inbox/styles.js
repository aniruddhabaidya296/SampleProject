import { StyleSheet, Platform } from 'react-native'
import colors from '../constants/colors';

const styles = StyleSheet.create({
  headerMain: {
    height: 60,
    width: '100%',
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.theme.WHITE_10
  },

  marketView: {
    height: 440,
    marginHorizontal: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.theme.WHITE_10,
  },
  filterView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 12,
    paddingBottom: 10,
    marginTop: -5,
  },
  topView: {
    height: 30,
    width: 160,
    flexDirection: 'row',
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  lineView: {
    height: 1,
    backgroundColor: colors.theme.WHITE_10
  },
  vLineView: {
    height: 38,
    width: 1,
    backgroundColor: colors.theme.WHITE_10
  },
  spaceView: {
    height: 5,
    width: 1,
  },
  headerSearch: {
    height: 60,
    width: '100%',
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.theme.WHITE_10,
  },
  spinner: {
    marginHorizontal: 15
  },
  close: {
    marginRight: 15,
    justifyContent: 'flex-end'
  },
  searchBar: {
    height: 60,
    width: 55,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
  latestView: {
    height: 135,
    justifyContent: 'space-between',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: colors.theme.WHITE_10
  },
  bodyText: {
    color: 'white',
  },
  latestTop: {
    alignItems: 'center',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
  },
  SafeAreaView: {
    flex: 1,
    backgroundColor: colors.theme.PRIMARY
  },
  safeAreaViewWithBackDrop: {
    flex: 1,
    position: "absolute",
    backgroundColor: colors.theme.DANGER
  },
  arrowImage: {
    height: 5,
    width: 10,
    marginTop: 25,
    marginEnd: 20,
    alignSelf: 'flex-start'
  },
  line: {
    height: 1,
    backgroundColor: colors.theme.WHITE,
    opacity: 0.1,
    marginHorizontal: 15,
    marginTop: 10
  },
  flatList: {
    marginHorizontal: 15,
  },
  barDecoration: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: 90,
    width: '100%',
    backgroundColor: colors.theme.PRIMARY_80,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
    borderTopWidth: Platform.OS === 'android' ? 0.6 : 0.3
  },
})

export default styles;
