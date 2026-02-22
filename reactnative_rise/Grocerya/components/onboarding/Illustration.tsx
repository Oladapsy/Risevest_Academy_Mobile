import { Image, StyleSheet } from 'react-native'

interface IllustrationProps {
    source: any,
}
const Illustration = ({ source }: IllustrationProps) => {
  return (
    <Image 
    source={source}
    style={styles.image}
    resizeMode='contain'
    />
  )
}

const styles = StyleSheet.create({
    image: {
        width: '80%',
        height: 200,
        marginBottom: 20,

    }

})
export default Illustration;