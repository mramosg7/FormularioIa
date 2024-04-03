
import "./globals.css";



export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="bg-black px-[70px] py-[30px] text-white flex justify-between">
            <div>
                <h1>Logo</h1>
            </div>
            <div>
              <button>Login</button>
              <button>Register</button>
              
            </div>
        </header>
        {children}
        
      </body>
    </html>
  );
}
