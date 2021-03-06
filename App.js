import React, {Component} from 'react';
import {
  AppRegistry, Image, ListView, StyleSheet,
  Text, TouchableHighlight, View, StatusBar, Platform
} from 'react-native';
import {StackNavigator} from 'react-navigation';

import CNodeJSList from './components/CNodeJSList';
import OSChinaList from './components/OSChinaList';
import ToutiaoList from './components/ToutiaoList';
import TuiCoolList from './components/TuiCoolList';
import SegmentFaultList from './components/SegmentFaultList';
import ZhihuDailyList from "./components/ZhihuDailyList";
import V2EXList from "./components/V2EXList";
import JueJinList from "./components/JueJinList";
import Kr36List from "./components/Kr36List";
import NewsDetail from "./components/NewsDetail";

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'IT资讯',
    headerStyle: { backgroundColor: '#0099ff', },
    headerTintColor: '#FFFFFF',
    headerTitleStyle: { color: 'white' },
  };

  constructor(props) {
    super(props);
    this.state = ({
      dataSource: ds.cloneWithRows([{
        name: 'CNodeJS',
        logo: require('./images/cnode.png')
      }, {
        name: '开源中国',
        logo: require('./images/oschina.png')
      }, {
        name: '开发者头条',
        logo: require('./images/toutiaoio.png')
      }, {
        name: '推酷',
        logo: require('./images/tuicool.png')
      // }, {
      //   name: 'SegmentFault',
      //   logo: require('./images/segmentfault.png')
      }, {
        name: '知乎日报',
        logo: require('./images/zhihudaily.png')
      }, {
        name: 'V2EX',
        logo: require('./images/v2ex.png')
      }, {
        name: '36氪',
        logo: require('./images/36kr.jpeg')
      }, {
        name: '掘金',
        logo: require('./images/juejin.png')
      }]),
    });
  }

  _onPress(rowData) {
    const {navigate} = this.props.navigation;
    if (rowData === 'CNodeJS') {
      navigate('CNodeJS', {
        name: rowData,
      })
    } else if (rowData === '开源中国') {
      navigate('OSChina', {
        name: rowData,
      })
    } else if (rowData === '开发者头条') {
      navigate('TouTiao', {
        name: rowData,
      })
    } else if (rowData === '推酷') {
      navigate('TuiCool', {
        name: rowData,
      })
    } else if (rowData === 'SegmentFault') {
      navigate('SegmentFault', {
        name: rowData,
      })
    } else if (rowData === '知乎日报') {
      navigate('ZhihuDaily', {
        name: rowData,
      })
    } else if (rowData === 'V2EX') {
      navigate('V2EX', {
        name: rowData,
      })
    } else if (rowData === '36氪') {
      navigate('kr36', {
        name: rowData,
      })
    } else if (rowData === '掘金') {
      navigate('juejin', {
        name: rowData,
      })
    }
  }

  render() {
    return <View style={{flex: 1}}>
      {
        Platform.OS === 'ios' ? <StatusBar barStyle='light-content' backgroundColor='#FFFFFF'/> : null
      }
      <ListView
        style={styles.listView}
        dataSource={this.state.dataSource}
        renderRow={(rowData) =>
          <TouchableHighlight
            style={styles.rowStyle}
            underlayColor='#008b8b'
            onPress={() => this._onPress(rowData.name)}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image style={{width: 40, height: 40, borderRadius: 4}} source={rowData.logo}/>
              <Text style={styles.rowText}>{rowData.name}</Text>
            </View>
          </TouchableHighlight>}
      />
    </View>
  }
}

const styles = StyleSheet.create({
  listView: {
    backgroundColor: '#eee',
  },
  rowText: {
    marginLeft: 10,
    fontSize: 18,
    flex: 1,
  },
  rowStyle: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    marginBottom: 1,
  },
});

const ITNews = StackNavigator({
  Home: {screen: HomeScreen},
  CNodeJS: {screen: CNodeJSList},
  OSChina: {screen: OSChinaList},
  TouTiao: {screen: ToutiaoList},
  TuiCool: {screen: TuiCoolList},
  SegmentFault: {screen: SegmentFaultList},
  ZhihuDaily: {screen: ZhihuDailyList},
  V2EX: {screen: V2EXList},
  kr36: {screen: Kr36List},
  juejin: {screen: JueJinList},
  NewsDetail: {screen: NewsDetail,},
});

AppRegistry.registerComponent('ITNews', () => ITNews);