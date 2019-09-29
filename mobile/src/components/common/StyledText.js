import React from 'react';
import { Text } from 'react-native';

/**
 * Font component - displays text based on family and boldness.
 * @type {Component}
 */

const SourceSansProText = props => (
  <Text
    style={[
      props.style,
      {
        fontFamily: props.family || 'SourceSansPro',
        fontSize: props.size || props.style.fontSize,
      },
    ]}
  >
    {props.text}
  </Text>
);

export default SourceSansProText;
