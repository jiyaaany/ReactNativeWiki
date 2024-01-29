import React from 'react';
import { NativeModules } from 'react-native';

import { vw } from '@utils/viewport';
import { Text, View } from 'native-base';
import StackFlashMessage from 'react-native-stack-flash-message';

import { theme } from '../../theme';

const SnackBar = () => {
  return (
    <StackFlashMessage
      ref={ref => StackFlashMessage.setRef(ref)}
      containerStyle={{ top: NativeModules.StatusBarManager.HEIGHT + 10 }}
      messageWrapperStyle={{
        borderRadius: 8,
      }}
      messageStyle={{
        minHeight: 'auto',
        paddingVertical: 0,
        paddingRight: 0,
      }}
      contentsWrapperStyle={{
        paddingVertical: vw(9),
        paddingLeft: vw(10),
        paddingRight: vw(10),
      }}
      theme={{
        success: {
          color: theme.colors.blue[500],
          backgroundColor: theme.colors.blue[500],
        },
        info: {
          color: theme.colors.gray[900],
          backgroundColor: theme.colors.gray[900],
        },
        error: {
          color: 'red',
          backgroundColor: 'red',
        },
      }}
      icons={{ success: null, info: null, error: null }}
      titleComponent={View}
      titleProps={{ style: { marginBottom: 0 } }}
      contentsComponent={Text}
      contentsProps={{
        style: {
          color: theme.colors.white,
          fontSize: vw(14),
          lineHeight: vw(22),
        },
      }}
      visibleProgress={false}
    />
  );
};

export default SnackBar;
