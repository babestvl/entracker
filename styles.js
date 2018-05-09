import { StyleSheet } from 'react-native';
import { Constants } from 'expo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    margin: 20
  },
  tabContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  stackContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  buttonStyle: {
    marginBottom: 10
  },
  containerCenter: {
    alignItems: 'center',
  },
  labelTabBar: {
    fontSize: 12
  },
  topMenu: {
    height: 53,
    backgroundColor: '#2a324b',
  },
  menuContainer: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  header1: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20
  },
  header2: {
    fontSize: 24,
    textAlign: 'left',
    marginTop: 10,
    marginLeft: 20,
    marginBottom: 20
  },
  header3: {
    fontSize: 24,
    textAlign: 'left',
    marginTop: 10,
    marginLeft: 20,
  },
  header4: {
    fontSize: 24,
    textAlign: 'left',
    marginTop: 10,
    marginLeft: 10,
  },
  labelForm: {
    fontSize: 18,
    marginLeft: 20,
  },
  subHeader: {
    fontSize: 18,
    marginLeft: 10,
    textAlign: 'left',
    marginBottom: 20,
  }
});

export default styles;