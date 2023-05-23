import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: process.env.BUSINESS_NAME,
	description: process.env.BUSINESS_DESCRIPTION,
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="pt-BR">
			<body className={inter.className} suppressHydrationWarning={true} >{children}</body>
		</html>
	)
}