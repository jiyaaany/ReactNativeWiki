import StackFlashMessage, { Type } from 'react-native-stack-flash-message';

export const showSnackBar = (message: string, type: Type = 'success') => {
  StackFlashMessage.show({
    type,
    contents: message,
  });
};
