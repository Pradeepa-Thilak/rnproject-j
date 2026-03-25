import {View,Text,Pressable} from "react-native"
import { stylesPro as styles } from "../screens/PDP/PDP_style"
import { useDispatch } from "react-redux"
import { addToCart } from "../slice/cartSlice";

export default function Pdpbuttons({product}) {
    const dispatch = useDispatch();
    return(
        <View style={styles.btncon}>
            <Pressable style={styles.btn1} onPress={() => dispatch(addToCart(product))}>
                <Text style={styles.btn1txt}>Add to cart</Text>
            </Pressable>
            <Pressable style={styles.btn2}>
                <Text style={styles.btn2txt}>Buy now </Text>
            </Pressable>
        </View>
    )
}
