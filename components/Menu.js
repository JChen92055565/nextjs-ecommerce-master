import Link from 'next/link';

const Menu = () => {
  return (
    <nav>
      <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
        <li style={{ marginRight: '10px' }}>
          <Link href="/">
            <a style={buttonStyle}>Home</a>
          </Link>
        </li>
        <li style={{ marginRight: '10px' }}>
          <Link href="/about">
            <a style={buttonStyle}>About</a>
          </Link>
        </li>
        <li style={{ marginRight: '10px' }}>
          <Link href="/contact">
            <a style={buttonStyle}>Contact</a>
          </Link>
        </li>
        {/* Add more menu items as needed */}
      </ul>
    </nav>
  );
};

const buttonStyle = {
  display: 'inline-block',
  padding: '10px 20px',
  backgroundColor: '#f0f0f0',
  border: '1px solid #ccc',
  borderRadius: '5px',
  textDecoration: 'none',
  color: '#333',
};

export default Menu;