import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import Mall from './mall';

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }


  render () {
    return (
      <View className='mall'>
        <Mall></Mall>

      </View>
    )
  }
}
