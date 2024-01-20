import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import './App.css';
import { auth } from './firebase';

function App() {
  const signInWithGooogle = async () => {
    try {
      const provider = new GoogleAuthProvider();

      const result = await signInWithPopup(auth, provider);

      console.log('LOGGED USER', result.user);
    } catch (error) {
      console.log(error)
    }
  }

  const signInWithGithub = async () => {
    try {
      const provider = new GithubAuthProvider();

      const result = await signInWithPopup(auth, provider);

      console.log('LOGGED USER', result.user);
    } catch (error) {
      console.log(error)
    }
  }


  const signInWithFacebook = async () => {
    try {
      const provider = new FacebookAuthProvider();

      const result = await signInWithPopup(auth, provider);

      console.log('LOGGED USER', result.user);
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className="App">
      <button onClick={signInWithGooogle}>
        Sign In With Google
      </button>

      <button onClick={signInWithGithub}>
        Sign In With Github
      </button>

      <button onClick={(signInWithFacebook)}>
        Sign In With Facebook
      </button>
    </div>
  );
}

export default App;
