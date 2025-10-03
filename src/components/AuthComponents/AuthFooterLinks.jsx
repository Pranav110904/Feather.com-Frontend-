const AuthFooterLinks = () => {
  const links = [
    "About","Download the X app","Help Center","Terms of Service",
    "Privacy Policy","Cookie Policy","Accessibility","Ads info",
    "Blog","Careers","Brand Resources","Advertising","Marketing",
    "X for Business","Developers","Directory","Settings"
  ];

  return (
    <div className="bg-black text-gray-400 text-xs font-syne md:text-sm  font-medium py-4">
      <div className="container mx-auto flex flex-wrap justify-center space-x-4">
        {links.map((link, idx) => (
          <a key={idx} href="#" className="hover:text-gray-200">{link}</a>
        ))}
        <span className="text-gray-500">© 2024 X Corp.</span>
      </div>
    </div>
  );
};

export default AuthFooterLinks;
