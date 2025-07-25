import { StyleSheet, View } from 'react-native'
// import Animation1 from './components/TimingAnimation/1'
// import Animation2 from './components/TimingAnimation/2'
// import Animation3 from './components/TimingAnimation/3'
// import Animation4 from './components/TimingAnimation/4'
// import Animation1 from './components/SpringAnimation/1'
// import Animation1 from './components/SequenceForAnimations/1'
import Animation2 from './components/SequenceForAnimations/2'

export default function App() {

  return (
    <View style={styles.content}>
      <Animation2 />
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    marginTop: 100
  }
})