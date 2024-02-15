
import '@styles/globals.css';
import Nav from '@components/Nav';
import { Provider } from '@components/Provider';
import Header from '@components/Header';
import {session} from 'inspector';

export const metadata = {
    title: "Russian Gesture (Sign) Language",
    description: "обучение русской жестовой дактильной азбуке"
}

const RootLayout = ({ children }) => {
  children,
  session
  
  return (
    <html lang="ru">
        <head>
        </head>
        <body>
          <Provider session={session}>
            <div className='main'>
                  <div className='gradient'/>
              </div>

              <main className='app'>
                  <Header />
                  {children}
              </main>
          </Provider>
        </body>
    </html>
  )
}

export default RootLayout