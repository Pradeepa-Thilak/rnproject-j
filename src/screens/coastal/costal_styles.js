import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    componentContainer: {
        aspectRatio: 32 / 49,
        backgroundColor: '#faf2e5'
    },
    componentBackground: {
        width: '100%',
        height: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    componentTxt: {
        textAlign: 'center',
        fontSize: 24,
        fontFamily: 'EBGaramond-Regular',
        color: '#383938'
    },
    componentButton: {
        borderWidth: 1,
        borderColor: '#707070',
        paddingHorizontal: 25,
        paddingVertical: 2.5
    },
    componentButtonTxt: {
        fontSize: 12,
        fontFamily: 'Lato-Regular',
        color: '#383938'
    },
    bestSellerContainer: {
        paddingVertical: 50,
        backgroundColor: '#faecd6'
    },
    bestSellerTxt: {
        fontSize: 12,
        fontFamily: 'EBGaramond-Regular',
        color: '#383938',
        marginHorizontal: 10,
        marginBottom: 20,
        textAlign: 'center',
        letterSpacing: 0.2,
    }, 
    bestSellerGridContainer: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    bestSellerGridImage: {
        width: '100%',
        aspectRatio: 138 / 173
    }
})