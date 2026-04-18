import Navigation from "../components/Naivigation";

const RootLaout = ({ children }) => {

  return (
    <html>
      <body>
        <p>Navigation-Header</p>
        <Navigation />
        {children}
        <p>Footer</p>
      </body>
    </html>
  )
};

export default RootLaout;