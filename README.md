# react-native-appconfig

Simplest react-native library for accessing application configurations received from MDM.
- Android: using RestrictionsManager
- IOS: using react-native built-in Settings class with 'com.apple.configuration.managed'


The initial library code was generated using `npx create-react-native-library@latest`

## Note
If you need more features such as on-change event, consider using https://github.com/mattermost/react-native-emm.

I've created this library because `react-native-emm` was conflicting with other more maintained Expo libraries such as `expo-screen-capture`, and also support future Expo versions more easily.


## Installation


```sh
npm install react-native-appconfig
```


## Usage


```js
import { getManagedConfig } from 'react-native-appconfig';

// ...

const managedVars = getManagedConfig();
```


## Contributing

- [Development workflow](CONTRIBUTING.md#development-workflow)
- [Sending a pull request](CONTRIBUTING.md#sending-a-pull-request)
- [Code of conduct](CODE_OF_CONDUCT.md)

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
