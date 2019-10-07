import React from 'react';
import { Text } from 'react-native';

/**
 * Font component - displays text based on family and boldness.
 * @type {Component}
 */

 const mergeStyles = ({ style: styles }) => {
   const newStyles = Array.isArray(styles)
   ? Object.assign({}, ...styles)
   : styles;
   return newStyles;
 };

const SourceSansProText = props => {
  const styles = mergeStyles(props);
  return (
    <Text
      style={[
        styles,
        {
          fontFamily: props.family || 'SourceSansPro',
          fontSize: props.size || styles.fontSize,
        },
      ]}
    >
      {props.text}
    </Text>
  );
};

export default SourceSansProText;
