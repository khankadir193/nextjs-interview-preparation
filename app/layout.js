const RootLaout = ({ children }) => {

  return (
    <html>
      <body>
        <p>Navigation-Header</p>
        {children}
        <p>Footer</p>
      </body>
    </html>
  )
};

export default RootLaout;