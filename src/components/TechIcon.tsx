import React from 'react'

interface TechIconProps {
  name: string
  className?: string
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = 'w-4 h-4' }) => {
  const normalized = name.toLowerCase().trim()

  switch (normalized) {
    case 'javascript':
    case 'js':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path
            d="M6.5 18.5l1.6-1c.4.7.8 1.2 1.6 1.2.8 0 1.3-.3 1.3-1.4v-7.1h2v7.1c0 2.2-1.3 3.1-3.2 3.1-1.7 0-2.7-.9-3.3-1.9zm8.2-1.1l1.7-1c.5.8 1.1 1.3 2.1 1.3.9 0 1.5-.4 1.5-1 0-.7-.6-.9-1.9-1.5-1.9-.8-3.1-1.7-3.1-3.6 0-1.8 1.4-3.2 3.5-3.2 1.6 0 2.7.6 3.4 1.9l-1.6 1c-.4-.7-.9-1-1.8-1-.8 0-1.4.4-1.4.9 0 .6.5.9 1.6 1.3 2.1.9 3.4 1.7 3.4 3.7 0 2.2-1.7 3.4-3.7 3.4-2.1 0-3.3-1.1-4.2-2.3z"
            fill="#000000"
          />
        </svg>
      )

    case 'react':
      return (
        <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="none" aria-hidden="true">
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      )

    case 'html':
    case 'html5':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M3 2l1.8 18.2L12 22l7.2-1.8L21 2H3z" fill="#E34F26" />
          <path d="M12 3.7v16.4l5.7-1.4 1.4-15H12z" fill="#EF652A" />
          <path d="M6.9 6.8h10.2l-.2 2.3H9.4l.2 2.3h7.2l-.6 6.3-4.2 1.2-4.2-1.2-.3-3.3h2.3l.1 1.7 2.1.6 2.1-.6.2-2.3H6.7l.2-6.3z" fill="#FFFFFF" />
        </svg>
      )

    case 'css':
    case 'css3':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M3 2l1.8 18.2L12 22l7.2-1.8L21 2H3z" fill="#1572B6" />
          <path d="M12 3.7v16.4l5.7-1.4 1.4-15H12z" fill="#33A9DC" />
          <path d="M12 6.8h5.1l-.2 2.3h-4.9V6.8zm0 4.6h4.7l-.4 4.5-4.3 1.2v-2.3l2.2-.6.2-1.6H12v-1.2zm0-4.6v2.3H9.4l-.2-2.3H12zm0 4.6v2.3H7.3l-.2-2.3H12zm0 4.6l-.1.6-2.1-.6-.1-1.7H7.4l.3 3.3 4.3 1.2v-2.8z" fill="#FFFFFF" />
        </svg>
      )

    case 'firebase':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4.6 17.5L6.9 3.2c.1-.4.6-.6.9-.3l3.6 4.7-6.8 9.9z" fill="#FFA000" />
          <path d="M13.2 8.9L10.6 5.4c-.3-.4-.9-.3-1 .1L4.6 17.5l8.6-8.6z" fill="#F57C00" />
          <path d="M13.8 20.9l5.6-3.4-3.5-12.8c-.1-.4-.6-.6-.9-.3l-7.6 12 6.4 4.5z" fill="#FFCA28" />
          <path d="M4.6 17.5l8.6 4.9c.5.3 1.1.3 1.6 0l4.6-4.9-14.8 0z" fill="#FFA000" />
        </svg>
      )

    case 'firestore':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M18.8 6.5l-6-3.5a1.6 1.6 0 00-1.6 0l-6 3.5a1.6 1.6 0 00-.8 1.4v7.2a1.6 1.6 0 00.8 1.4l6 3.5a1.6 1.6 0 001.6 0l6-3.5a1.6 1.6 0 00.8-1.4V7.9a1.6 1.6 0 00-.8-1.4z" fill="#FFCA28" />
          <path d="M12 3v18l6.8-4a1.6 1.6 0 00.8-1.4V7.9a1.6 1.6 0 00-.8-1.4L12 3z" fill="#FFA000" />
          <path d="M12 7.5L8.5 9.5 12 11.5l3.5-2L12 7.5zm0 4.5l-3.5 2 3.5 2 3.5-2-3.5-2z" fill="#FFFFFF" opacity="0.9" />
        </svg>
      )

    case 'vercel':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <polygon points="12 2, 22 19.5, 2 19.5" fill="#FFFFFF" />
        </svg>
      )

    case 'git':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M21.6 10.9L13.1 2.4a1.7 1.7 0 00-2.4 0L8.4 4.7l3 3a2 2 0 012.6 2.6l2.9 2.9a2 2 0 11-1.2 1.2l-2.7-2.7v4.4a2 2 0 11-1.7 0V11a2 2 0 01-1-1.8L7.3 6.2 2.4 11.1a1.7 1.7 0 000 2.4l8.5 8.5c.7.7 1.7.7 2.4 0l8.3-8.6c.7-.7.7-1.8 0-2.5z" fill="#F05032" />
        </svg>
      )

    case 'antigravity':
      // Official Google Antigravity Brand Logo:
      // The gravity-defying upward glyph with quantum particle and precision orbital ring
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <defs>
            <linearGradient id="antigravityGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#C47B52" />
              <stop offset="50%" stop-color="#E29D74" />
              <stop offset="100%" stop-color="#F4F1EA" />
            </linearGradient>
          </defs>
          {/* Orbital Gravity Ring */}
          <ellipse cx="12" cy="12" rx="9.5" ry="4" stroke="url(#antigravityGrad)" strokeWidth="1.2" strokeDasharray="3 2" transform="rotate(-25 12 12)" opacity="0.85" />
          {/* Inverted Floating Quantum Pyramid / Delta */}
          <path d="M12 4.5L18 16.5H6L12 4.5Z" fill="url(#antigravityGrad)" opacity="0.9" />
          {/* Inner Core Light */}
          <path d="M12 7.5L15.5 15H8.5L12 7.5Z" fill="#0D0D0D" />
          <circle cx="12" cy="11.5" r="1.8" fill="#F4F1EA" />
          <circle cx="17.5" cy="8.5" r="1.2" fill="#C47B52" />
        </svg>
      )

    case 'gemini':
      // Official Google Gemini 4-Pointed Sparkle Star Logo
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <defs>
            <linearGradient id="geminiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#4E88F5" />
              <stop offset="45%" stop-color="#9A66FF" />
              <stop offset="80%" stop-color="#C47B52" />
              <stop offset="100%" stop-color="#F4A261" />
            </linearGradient>
          </defs>
          <path
            d="M12 2C12 7.52 7.52 12 2 12C7.52 12 12 16.48 12 22C12 16.48 16.48 12 22 12C16.48 12 12 7.52 12 2Z"
            fill="url(#geminiGrad)"
          />
        </svg>
      )

    case 'chatgpt':
    case 'openai':
      // Official ChatGPT / OpenAI Vortex Rosette
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M21.5 10.3a5.5 5.5 0 00-.5-4.4 5.6 5.6 0 00-5.7-2.6 5.6 5.6 0 00-4.3-2A5.6 5.6 0 006 3.9a5.6 5.6 0 00-3.6 4.3 5.5 5.5 0 00.9 5.5 5.6 5.6 0 00.5 4.4 5.6 5.6 0 005.7 2.6 5.6 5.6 0 004.3 2A5.6 5.6 0 0018 20.1a5.6 5.6 0 003.6-4.3 5.5 5.5 0 00-.9-5.5z"
            fill="#10A37F"
            opacity="0.15"
          />
          <path
            d="M9.6 15.8l-1.3 2.3a.5.5 0 00.2.7l3.5 2a4.4 4.4 0 006.1-1.6 4.2 4.2 0 00.4-3.4l-1.3-.7.1 2.2a2.8 2.8 0 01-4 2.5l-3.7-2.1v-1.9zm9.2-3.1l-1.3-.7v-2.6a4.4 4.4 0 00-4.4-4.4 4.2 4.2 0 00-3.2 1.3l.6 1.2 2.1-.2a2.8 2.8 0 013.7 2.9v4.2l2.5.3zM5.2 11.3l1.3.7v2.6a4.4 4.4 0 004.4 4.4 4.2 4.2 0 003.2-1.3l-.6-1.2-2.1.2a2.8 2.8 0 01-3.7-2.9v-4.2l-2.5-.3zM14.4 8.2l1.3-2.3a.5.5 0 00-.2-.7l-3.5-2a4.4 4.4 0 00-6.1 1.6 4.2 4.2 0 00-.4 3.4l1.3.7-.1-2.2a2.8 2.8 0 014-2.5l3.7 2.1v1.9z"
            fill="#10A37F"
          />
          <circle cx="12" cy="12" r="1.5" fill="#10A37F" />
        </svg>
      )

    case 'claude':
    case 'anthropic':
      // Official Anthropic Claude Terracotta Starburst
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M13.8 2.5L12 8.2 10.2 2.5a.7.7 0 00-1.3.4l.9 6-5.8-2a.7.7 0 00-.9 1.1l4.9 3.7-6 1a.7.7 0 00-.3 1.3l5.8 2-4.9 3.6a.7.7 0 00.9 1.2l5.7-2.1-.9 6a.7.7 0 001.3.4l1.8-5.8 1.8 5.8a.7.7 0 001.3-.4l-.9-6 5.8 2.1a.7.7 0 00.9-1.2l-4.9-3.6 5.8-2a.7.7 0 00-.3-1.3l-6-1 4.9-3.7a.7.7 0 00-.9-1.1l-5.8 2 .9-6a.7.7 0 00-1.3-.4z"
            fill="#D97757"
          />
        </svg>
      )

    case 'google maps api':
    case 'google maps':
    case 'maps':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" fill="#EA4335" />
        </svg>
      )

    default:
      // Default clean copper dot / generic symbol
      return (
        <span className="w-2 h-2 rounded-full bg-[#C47B52]" aria-hidden="true" />
      )
  }
}
