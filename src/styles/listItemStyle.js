import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 5, 
        width: width * 0.6
    },
    thumbnailContainer: {
        flex: 4, 
        marginHorizontal: 8, 
        marginVertical: 8, 
        borderRadius: 8, 
        justifyContent: 'flex-end',
        overflow: 'hidden'
    },
    bottomContainer: {
        flex: 1,
        marginHorizontal: 8
    },
});

export default styles;