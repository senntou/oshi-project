import type { Metadata } from 'next';
import '../styles/globals.css';
import Header from '../components/layout/Header';
import { AuthProvider } from '../context/AuthProvider';
import Spacer from '../components/layout/Spacer';

export const metadata: Metadata = {
  title: '推しプロジェクト！',
  description: '声優のコンテンツを一覧できるサイト',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`antialiased`}>
        <AuthProvider>
          <Spacer>
            <div className=" flex size-full flex-col border border-gray-300 font-MPlusRounded1c">
              <Header />
              {children}
            </div>
          </Spacer>
        </AuthProvider>
      </body>
    </html>
  );
}
