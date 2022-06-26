import styles from './styles.module.scss';
import { FiX } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'

export function SigInButton() {
  const isUserLoggedIn = true;

  return isUserLoggedIn ? (
    <button className={styles.sigInButton}
      type="button">
      <FaGithub color='#04d361' />
      Matheus Gomes
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button className={styles.sigInButton}
      type="button">
      <FaGithub color='#eba417' />
      Sign In With Github</button>
  );
}