import { Link, useLocation, useNavigate } from "react-router-dom"
import { cn } from "@/lib/utils"
import StaggeredMenu from "./StaggeredMenu"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About me", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const location = useLocation()
  const navigate = useNavigate()

  // Menu items using your template format
  const menuItems = [
    { 
      label: 'Home', 
      ariaLabel: 'Go to home page', 
      link: '/',
      onClick: () => {
        console.log('Navigating to Home');
        navigate('/');
      }
    },
    { 
      label: 'About Me', 
      ariaLabel: 'Learn about me', 
      link: '/about',
      onClick: () => {
        console.log('Navigating to About');
        navigate('/about');
      }
    },
    { 
      label: 'Projects', 
      ariaLabel: 'View my projects', 
      link: '/projects',
      onClick: () => {
        console.log('Navigating to Projects');
        navigate('/projects');
      }
    },
    { 
      label: 'Contact', 
      ariaLabel: 'Get in touch', 
      link: '/contact',
      onClick: () => {
        console.log('Navigating to Contact');
        navigate('/contact');
      }
    }
  ];

  // Social items for GitHub and LinkedIn
  const socialItems = [
    { label: 'GitHub', link: 'https://github.com/Keane111' },
    { label: 'LinkedIn', link: 'https://www.linkedin.com/in/keane-richard-christopher-a7693b32b/' }
  ];

  return (
    <>
      {/* Mobile Menu - Only visible on mobile */}
      <div className="md:hidden fixed top-0 left-0 w-full z-50 pointer-events-none">
        <StaggeredMenu
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={false}
          menuButtonColor="#000000"
          openMenuButtonColor="#000000"
          changeMenuColorOnOpen={true}
          colors={['#f8f8f8', '#e8e8e8']}
          logoUrl="/logo.png"
          accentColor="#000000"
          isFixed={false}
          onMenuOpen={() => console.log('Menu opened')}
          onMenuClose={() => console.log('Menu closed')}
        />
      </div>

      {/* Desktop Navigation - Hidden on mobile */}
      <nav className="hidden md:block bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-center space-x-6 md:space-x-12 py-2 md:py-3 overflow-x-auto">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-sm md:text-lg font-medium transition-colors hover:text-gray-900 pb-1 whitespace-nowrap",
                  location.pathname === item.href ? "text-gray-900 border-b-2 border-gray-900" : "text-gray-600",
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  )
}
