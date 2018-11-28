import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 5, 
        width: 250
    },
    thumbnailContainer: {
        flex: 4, 
        marginRight: 8, 
        marginVertical: 8, 
        borderRadius: 8, 
        overflow: 'hidden'
    },
    thumbnail: {
        flex: 1, 
        height: undefined, 
        width: undefined, 
        resizeMode: 'cover'
    },
    bottomContainer: {
        flex: 1, 
        flexDirection: 'row'
    },
    roundedIcon: {
        height: 30, 
        width: 30, 
        borderRadius: 15, 
        overflow: 'hidden', 
        marginRight: 8
    }
});

export default styles;