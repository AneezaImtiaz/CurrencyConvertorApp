import { Alert } from 'react-native'

export function AlertMessageWithHandler (message, handler) {
  Alert.alert('',
    message,
    [
      {
        text: 'OK',
        onPress: () => {
          handler()
        }
      }
    ],
    {cancelable: false})
}

export const showAlert = (body, buttonCancel, buttonDone) => {
    Alert.alert(
        body.title,
        body.message,
        [
            { text: buttonCancel.title, onPress: buttonCancel.callback },
            { text: buttonDone.title, onPress: buttonDone.callback }
        ],
        { cancelable: false }
    );
}


