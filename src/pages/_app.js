import localFont from 'next/font/local';
import { Roboto } from 'next/font/google';

const notoSans = localFont({
  name: 'Noto Sans',
  src: '../fonts/NotoSans.ttf',
  display: 'swap',
  variable: '--font-noto-sans',
});

const roboto = Roboto({
  weight: ["400", "500"],
  subsets: ['latin'],
  display: 'swap',
});

export default function App({ Component, pageProps }) {
  return (
    <div style={{ fontFamily: `${roboto.style.fontFamily}, ${notoSans.style.fontFamily}` }}>
      <Component {...pageProps} />
    </div>
  )
}
