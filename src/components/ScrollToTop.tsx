import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    const scrollToTop = () => {
      // Temporarily disable smooth scrolling
      const htmlElement = document.documentElement
      const originalScrollBehavior = htmlElement.style.scrollBehavior
      
      // Set instant scroll behavior
      htmlElement.style.scrollBehavior = 'auto'
      
      // Multiple scroll methods
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      
      if (document.documentElement) {
        document.documentElement.scrollTop = 0
      }
      
      if (document.body) {
        document.body.scrollTop = 0
      }
      
      // Restore original scroll behavior after scrolling
      setTimeout(() => {
        htmlElement.style.scrollBehavior = originalScrollBehavior
      }, 50)
    }

    // Execute immediately
    scrollToTop()
    
    // Execute with a small delay to ensure it works after route change
    const timeoutId = setTimeout(scrollToTop, 0)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [pathname])

  return null
}
