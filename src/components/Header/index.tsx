
// A funcção abaixo serve para importar uma função do NextJs para substituiar a função de ancoras nos links, que ao invés de carregar toda a página irá carregar apenas o novo conteúdo. Conceito mais conhecido como SPA
import Link from 'next/link';
import { ActiveLink } from '../ActiveLink';

//Importando o botão do Login
import { SigInButton } from '../SignInButton';

//Imporação do CSS
import styles from './styles.module.scss';

export function Header() {

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="ig.news" />
        <nav>
          <ActiveLink activeClassName={styles.active} href='/' >
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href='/posts' prefetch>
            <a >Posts</a>
          </ActiveLink>
        </nav>
        <SigInButton />
      </div>
    </header>
  );
}

// função prefetch serve para deixar a página pré carregada //