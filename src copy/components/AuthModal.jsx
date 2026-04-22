import React, { useState, useEffect, useRef } from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
  StatusBar,
} from 'react-native';
import { IconButton } from 'react-native-paper';
import TextStrings, { styles } from './TextString';
import { PrimaryButton, BackButton, ResendButton } from './AuthButton';
import { useAuth } from '../context/AuthContext';
import colors from '../assests/colors';
const INITIAL_STATE = {
  screen: 'getotp',
  mobile: '',
  otp: '',
  timer: 599,
  resendTimer: 29,
  attempts: 3,
  error: '',
  firstName: '',
  lastName: '',
  email: '',
  gender: 'Female',
  dob: '',
  agreed: false,
};
const GetOTPScreen = ({ state, update, onNext }) => {
  const T = TextStrings.getOtp;
  return (
    <View style={styles.screen}>
      <Image
        source={{ uri: TextStrings.logoUri }}
        style={styles.logoImage}
        resizeMode="contain"
      />
      <Text style={styles.tagline}>{TextStrings.tagline}</Text>
      <Text style={styles.welcome}>{T.welcome}</Text>
      <Text style={styles.offerWrap}>
        <Text style={styles.offerNormal}>{T.offerPrefix}</Text>
        <Text style={styles.offerBold}>{T.offerCode}</Text>
        <Text style={styles.offerNormal}>{T.offerMiddle}</Text>
        <Text style={styles.offerBold}>{T.offerDiscount}</Text>
        <Text style={styles.offerNormal}>{T.offerSuffix}</Text>
      </Text>
      <TextInput
        style={styles.input}
        placeholder={T.phonePlaceholder}
        keyboardType="phone-pad"
        maxLength={10}
        value={state.mobile}
        onChangeText={(v) => update('mobile', v)}
        placeholderTextColor={colors.grayColor7}
      />
      <PrimaryButton
        label={T.btnLabel}
        onPress={onNext}
        disabled={state.mobile.length !== 10}
      />
    </View>
  );
};
const VerifyScreen = ({ state, update, onNext, onBack }) => {
  const timerRef = useRef(null);
  const resendRef = useRef(null);
  const T = TextStrings.verify;
  useEffect(() => {
    timerRef.current = setInterval(() => {
      update('timer', (prev) =>
        prev <= 1 ? (clearInterval(timerRef.current), 0) : prev - 1,
      );
    }, 1000);
    resendRef.current = setInterval(() => {
      update('resendTimer', (prev) =>
        prev <= 1 ? (clearInterval(resendRef.current), 0) : prev - 1,
      );
    }, 1000);
    return () => {
      clearInterval(timerRef.current);
      clearInterval(resendRef.current);
    };
  }, []);
  const formatTime = (secs) => {
    const m = String(Math.floor(secs / 60)).padStart(2, '0');
    const s = String(secs % 60).padStart(2, '0');
    return `${m}:${s}`;
  };
  const handleResend = () => {
    update('resendTimer', 29);
    update('otp', '');
    update('error', '');
    clearInterval(resendRef.current);
    resendRef.current = setInterval(() => {
      update('resendTimer', (prev) =>
        prev <= 1 ? (clearInterval(resendRef.current), 0) : prev - 1,
      );
    }, 1000);
  };
  const handleVerify = () => {
    if (state.timer === 0) {
      update('error', T.errors.expired);
      return;
    }
    if (state.otp.length < 4) {
      update('error', T.errors.invalid);
      return;
    }
    if (state.otp !== '123456') {
      const remaining = state.attempts - 1;
      update('attempts', remaining);
      update('error', T.errors.wrongOtp(remaining));
      return;
    }
    onNext();
  };
  return (
    <View style={styles.screen}>
      <Image
        source={{ uri: TextStrings.logoUri }}
        style={styles.logoImage}
        resizeMode="contain"
      />
      <Text style={styles.tagline}>{TextStrings.tagline}</Text>
      <BackButton label={T.back} onPress={onBack} />
      <Text style={styles.otpInfo}>
        {T.otpInfoPrefix}
        {state.mobile}
      </Text>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder={T.otpPlaceholder}
          keyboardType="number-pad"
          maxLength={6}
          value={state.otp}
          onChangeText={(v) => {
            update('otp', v);
            update('error', '');
          }}
          editable={state.attempts > 0 && state.timer > 0}
          placeholderTextColor={colors.grayColor7}
        />
        <Text style={styles.remainingTime}>
          {T.remainingLabel}
          {formatTime(state.timer)}
        </Text>
      </View>
      <View style={styles.resendRow}>
        {state.resendTimer > 0 ? (
          <Text style={styles.resendWait}>
            {T.resendWaitPrefix}
            {formatTime(state.resendTimer)}
          </Text>
        ) : (
          <ResendButton label={T.resendLabel} onPress={handleResend} />
        )}
      </View>
      {state.attempts < 3 && (
        <Text style={styles.attemptsText}>
          {T.attemptsLabel(state.attempts)}
        </Text>
      )}
      {state.error ? <Text style={styles.errorText}>{state.error}</Text> : null}
      <PrimaryButton
        label={T.btnLabel}
        onPress={handleVerify}
        disabled={
          state.otp.length < 4 || state.attempts === 0 || state.timer === 0
        }
      />
    </View>
  );
};
const SignupScreen = ({ state, update, onSubmit, onBack }) => {
  const T = TextStrings.signup;
  const isFormValid = state.firstName && state.email && state.agreed;
  const handleSubmit = () => {
    if (!state.firstName) {
      update('error', T.errors.firstName);
      return;
    }
    if (!state.email || !state.email.includes('@')) {
      update('error', T.errors.email);
      return;
    }
    if (!state.agreed) {
      update('error', T.errors.terms);
      return;
    }
    onSubmit();
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.signupHeader}>
        <Text style={styles.signupTitle}>{T.title}</Text>
      </View>
      <Text style={styles.signupSubtitle}>{T.subtitle}</Text>
      <View style={styles.inputReadOnly}>
        <Text style={styles.inputLabel}>{T.mobileLabel}</Text>
        <Text style={styles.inputValue}>
          {T.mobilePrefix}
          {state.mobile}
        </Text>
      </View>
      <View style={styles.row}>
        <TextInput
          style={styles.inputHalfLeft}
          placeholder={T.firstNamePlaceholder}
          value={state.firstName}
          onChangeText={(v) => update('firstName', v)}
          placeholderTextColor={colors.grayColor7}
        />
        <TextInput
          style={styles.inputHalfRight}
          placeholder={T.lastNamePlaceholder}
          value={state.lastName}
          onChangeText={(v) => update('lastName', v)}
          placeholderTextColor={colors.grayColor7}
        />
      </View>
      <TextInput
        style={styles.input}
        placeholder={T.emailPlaceholder}
        keyboardType="email-address"
        autoCapitalize="none"
        value={state.email}
        onChangeText={(v) => update('email', v)}
        placeholderTextColor={colors.grayColor7}
      />
      <View style={styles.genderRow}>
        {T.genderOptions.map((g) => (
          <TouchableOpacity
            key={g}
            style={styles.genderOption}
            onPress={() => update('gender', g)}
          >
            <View
              style={
                state.gender === g
                  ? styles.radioOuterSelected
                  : styles.radioOuter
              }
            >
              {state.gender === g && <View style={styles.radioInner} />}
            </View>
            <Text style={styles.genderText}>{g}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TextInput
        style={styles.input}
        placeholder={T.dobPlaceholder}
        value={state.dob}
        onChangeText={(v) => update('dob', v)}
        placeholderTextColor={colors.grayColor7}
      />
      <TouchableOpacity
        style={styles.termsRow}
        onPress={() => update('agreed', !state.agreed)}
      >
        <View style={state.agreed ? styles.checkboxChecked : styles.checkbox}>
          {state.agreed && <Text style={styles.checkmark}>{T.checkmark}</Text>}
        </View>
        <Text style={styles.termsText}>
          <Text style={styles.termsNormal}>{T.termsPrefix}</Text>
          <Text style={styles.termsLink}>{T.termsOfUse}</Text>
          <Text style={styles.termsNormal}>{T.termsAnd}</Text>
          <Text style={styles.termsLink}>{T.privacyPolicy}</Text>
          <Text style={styles.termsNormal}>{T.termsSuffix}</Text>
        </Text>
      </TouchableOpacity>
      {state.error ? <Text style={styles.errorText}>{state.error}</Text> : null}
      <BackButton label={T.backBtn} onPress={onBack} />
      <PrimaryButton
        label={T.btnLabel}
        onPress={handleSubmit}
        disabled={!isFormValid}
      />
    </ScrollView>
  );
};
const AuthModal = ({ visible, onClose }) => {
  const { login } = useAuth();
  const [state, setState] = useState(INITIAL_STATE);
  const update = (key, value) => {
    setState((prev) => ({
      ...prev,
      [key]: typeof value === 'function' ? value(prev[key]) : value,
    }));
  };
  const navigateTo = (screen) => update('screen', screen);
  const goBack = () => {
    if (state.screen === 'verify') update('screen', 'getotp');
    else if (state.screen === 'signup') update('screen', 'verify');
    else handleClose();
  };
  const handleClose = () => {
    setState(INITIAL_STATE);
    onClose();
  };
  const handleSubmit = () => {
    login({
      firstName: state.firstName,
      lastName: state.lastName,
      email: state.email,
      mobile: state.mobile,
      dob: state.dob,
      gender: state.gender,
    });
    handleClose();
  };
  return (
    <Modal
      visible={visible}
      transparent={false}
      animationType="slide"
      onRequestClose={goBack}
      statusBarTranslucent={true}
    >
      <StatusBar backgroundColor={colors.whiteColor1} barStyle="dark-content" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.overlay}
      >
        <View style={styles.container}>
          <TouchableOpacity style={styles.closeBtn} onPress={handleClose}>
            {/* <Text style={styles.closeText}>{TextStrings.closeIcon}</Text> */}
            <IconButton icon="close" size={24} />
          </TouchableOpacity>
          {state.screen === 'getotp' && (
            <GetOTPScreen
              state={state}
              update={update}
              onNext={() => navigateTo('verify')}
            />
          )}
          {state.screen === 'verify' && (
            <VerifyScreen
              state={state}
              update={update}
              onNext={() => navigateTo('signup')}
              onBack={goBack}
            />
          )}
          {state.screen === 'signup' && (
            <SignupScreen
              state={state}
              update={update}
              onSubmit={handleSubmit}
              onBack={goBack}
            />
          )}
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};
export default AuthModal;
