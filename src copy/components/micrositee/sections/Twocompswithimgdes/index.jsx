import React from 'react';
import { View } from 'react-native';
import ComponentWithImage_HeaderAndDescription from '../ComponentWithImage_HeaderAndDescription';
import Compwithbgontop from '../Compwithbgontop';
export default function TwoCompsWithImgDes({
  details,
  AR,
  reversebg = false,
  reverseimg = false,
}) {
  return (
    <View>
      <Compwithbgontop
        details={details}
        AR={AR}
        imgIndex={0}
        bgIndex={0}
        reverseBg={reversebg}
        reverseimg={reverseimg}
      />

      <ComponentWithImage_HeaderAndDescription
        details={details}
        AR={AR}
        imgIndex={1}
        bgIndex={1}
        reverseBg={reversebg}
        reverseimg={reverseimg}
      />
    </View>
  );
}
