import { StyleSheet, View } from 'react-native'
// import Animation1 from './components/TimingAnimation/1'
// import Animation2 from './components/TimingAnimation/2'
// import Animation3 from './components/TimingAnimation/3'
import Animation4 from './components/TimingAnimation/4'

export default function App() {

  return (
    <View style={styles.content}>
      <Animation4 />
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    marginTop: 100
  }
})