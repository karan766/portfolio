// Google Analytics
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }
}

// Track events
export const event = ({ action, category, label, value }: {
  action: string
  category: string
  label?: string
  value?: number
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Track contact form submissions
export const trackContactForm = (method: string) => {
  event({
    action: 'contact_form_submit',
    category: 'engagement',
    label: method,
  })
}

// Track project link clicks
export const trackProjectClick = (projectName: string) => {
  event({
    action: 'project_click',
    category: 'engagement',
    label: projectName,
  })
}

// Track social media clicks
export const trackSocialClick = (platform: string) => {
  event({
    action: 'social_click',
    category: 'engagement',
    label: platform,
  })
}