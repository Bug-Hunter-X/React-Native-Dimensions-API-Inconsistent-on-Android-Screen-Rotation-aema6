This solution uses `onLayout` to ensure we only access `Dimensions` after layout is complete
```javascript
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, LayoutAnimation } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const MyComponent = () => {
  const [windowWidth, setWindowWidth] = useState(SCREEN_WIDTH);

  useEffect(() => {
    const handleLayout = (e) => {
      const { width } = e.nativeEvent.layout;
      setWindowWidth(width);
    };
    const viewRef = React.createRef();

    viewRef.current?.measure((fx, fy, width, height, px, py) => {
       setWindowWidth(width)
    });
  }, []);

  return (
    <View style={[styles.container, { width: windowWidth }]} onLayout={handleLayout}>
      <Text>Width: {windowWidth}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
    height: 100
  },
});

export default MyComponent;
```