import React from 'react'
import Taro, { Component } from '@tarojs/taro-rn'
import { View, Text, StyleSheet, Button } from 'react-native'
import { getImageInfo, saveImageToPhotosAlbum } from '../../../src/api/image'
import { getLocation } from '../../../src/api/location'

const {JDLocation, JDPhotoPicker, JDDownload} = require('@jdreact/jdreact-core-lib')

const styles = StyleSheet.create({
  index: {
    fontSize: 24
  }
})

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  getLocation () {
    console.log('getLocation')
    getLocation({
      success: (res) => {
        console.log(res)
      }
    }).then(res => console.log(res))
  }

  chooseImage () {
    console.log('chooseImage')
    // JDPhotoPicker.pickPhoto([], 9, (lists, error) => {
    //   console.log(lists)
    //   this.setState({
    //     imagelist: lists
    //   })
    //   // JDUtils.imgToBase64(lists[0].url).then((data)=>{
    //   //   console.log(data);
    //   // },error=>console.log(error));
    // }, () => { })

    // pickFromAlbumWithCrop
    JDPhotoPicker.pickFromAlbumWithCrop(true, (path) => {
      console.log(path)
    }, () => { })

    // pickFromCameraWithCrop
    // JDPhotoPicker.pickFromCameraWithCrop(true, (path) => {
    //   console.log(path)
    //   // this.refs.example1.updateSource(
    //   //   {uri: path}
    //   // )
    // }, () => { })
  }

  getImageInfo () {
    getImageInfo({
      src: 'http://assets.processon.com/chart_image/5c988481e4b01e76978bd6ab3.png',
      // src: '/var/mobile/Containers/Data/Application/D006EE77-92AB-4143-9D3D-2D77378A2A12/Library/Caches/RNSelectedPic',
      success: (res) => {
        console.log(res)
      }
    }).then(res => console.log(res))
  }

  saveImageToPhotosAlbum () {
    saveImageToPhotosAlbum(
      {
        filePath: 'https://m.360buyimg.com/mobilecms/jfs/t4072/112/1591679829/43588/55e4f4f4/588065f1Nb0e15eaa.png',
        success: (res) => {
          console.log(res)
        }
      }).then(res => console.log(res))
  }

  render () {
    return (
      <View style={{paddingTop: 20}}>
        <Text style={styles.index}>Hello world!</Text>
        <Button onPress={this.getLocation.bind(this)} title='getLocation' />
        <Text>图片</Text>
        <Button onPress={this.chooseImage.bind(this)} title='Taro.chooseImage' />
        <Button onPress={this.getImageInfo.bind(this)} title='Taro.getImageInfo' />
        <Button onPress={this.saveImageToPhotosAlbum.bind(this)} title='Taro.saveImageToPhotosAlbum' />
      </View>
    )
  }
}