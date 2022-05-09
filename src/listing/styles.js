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
  group: {
    marginTop: 30,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 80,
    justifyContent: 'space-between',
  },
  latestView: {
    height: 135,
    justifyContent: 'space-between',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: colors.theme.WHITE_10
  },
  image: {
    height: 110,
    width: 110,
  },
  latestTop: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  latestHeader: {
    color: 'black',
    fontSize: 24,
    fontWeight: '900',
  },
  SafeAreaView: {
    flex: 1,
    backgroundColor: colors.theme.PRIMARY
  },
  listColumn: {
    paddingHorizontal: 15,
    flexDirection: 'column',
    height: 110,
    justifyContent: 'space-evenly'
  },
  heading: {
    fontSize: 16,
    fontWeight: '700',
    color: 'black',
    marginHorizontal: 21,
    marginBottom: 10,
  },
  listTile: {
    paddingHorizontal: 20,
    backgroundColor: colors.theme.WHITE,
    paddingVertical: 20,
    flexDirection: 'row',
    borderTopColor: "#EBEBEB",
    borderBottomColor: "#EBEBEB",
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  live: {
    color: '#18A3AD',
    fontSize: 12,
    fontWeight: '700',
  },
  draft: {
    color: 'rgba(254, 185, 43, 1)',
    fontSize: 12,
    fontWeight: '700',
  },
  boxDraft: {
    backgroundColor: 'rgba(254, 185, 43, 0.15)',
    borderRadius: 5,
    alignSelf: 'flex-start',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  boxLive: {
    backgroundColor: 'rgba(24, 163, 173, 0.15)',
    borderRadius: 5,
    alignSelf: 'flex-start',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  listedInfo: {
    color: 'rgba(124, 124, 124, 1)',
    fontSize: 12,
    fontWeight: '500',
  },
  title: {
    color: 'rgba(26, 26, 26, 1)',
    fontSize: 18,
    fontWeight: '700',
  },
  standaloneRowBack: {
    justifyContent: 'flex-end',
    flex: 1,
    flexDirection: 'row',
  },
  hiddenText: {
    marginTop: 10,
    color: 'white',
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '500',
  },
  calendarBox: {
    width: 80,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#18A3AD',
  },
  accessBox: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: 80,
    backgroundColor: 'rgba(24, 163, 173, 0.75)'
  }
})

export default styles;
