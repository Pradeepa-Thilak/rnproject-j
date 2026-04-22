import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './TextString';
export const PrimaryButton = ({ label, onPress, disabled }) => (
  <TouchableOpacity
    style={disabled ? styles.btnDisabled : styles.btn}
    onPress={onPress}
    disabled={disabled}
  >
    <Text style={styles.btnText}>{label}</Text>
  </TouchableOpacity>
);
export const BackButton = ({ label, onPress }) => (
  <TouchableOpacity style={styles.backBtn} onPress={onPress}>
    <Text style={styles.backText}>{label}</Text>
  </TouchableOpacity>
);
export const ResendButton = ({ onPress, label }) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={styles.resendActive}>{label}</Text>
  </TouchableOpacity>
);
