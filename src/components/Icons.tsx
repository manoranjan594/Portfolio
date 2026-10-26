import type { SVGProps } from 'react';

/* ------------------------------------------------------------------ */
/*  Social Icons                                                      */
/* ------------------------------------------------------------------ */
export function Github({ className = "w-5 h-5", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

export function Linkedin({ className = "w-5 h-5", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Official Technology & Programming Language SVGs                   */
/* ------------------------------------------------------------------ */

// Python Official Logo (Dual Snake in Blue & Gold)
export function PythonLogo({ className = "w-5 h-5", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg role="img" viewBox="0 0 24 24" className={className} {...props}>
      <path
        fill="#3776AB"
        d="M11.91 2c-3.1 0-5.1 1.4-5.1 3.4v1.8h5.2v.9H4.3C2.3 8.1 1 9.9 1 12.3c0 2.5 1.4 4.1 3.5 4.1h1.5v-2.1c0-2.3 2-4.1 4.3-4.1h5.3v-1.7c0-2.1-2-3.5-4.7-3.5h1-.99zm-2.4 1.7a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
      />
      <path
        fill="#FFD438"
        d="M12.09 22c3.1 0 5.1-1.4 5.1-3.4v-1.8H12v-.9h7.7c2 0 3.3-1.8 3.3-4.2 0-2.5-1.4-4.1-3.5-4.1H18v2.1c0 2.3-2 4.1-4.3 4.1H8.4v1.7c0 2.1 2 3.5 4.7 3.5h-1 .99zm2.4-1.7a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
      />
    </svg>
  );
}

// C Programming Language Official Logo (Authentic Simple-Icons / K&R C Lettermark)
export function CLogo({ className = "w-5 h-5", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg role="img" viewBox="0 0 24 24" className={className} {...props}>
      <title>C Programming Language</title>
      <path
        fill="#00599C"
        d="M16.592 9.196s-.354-3.298-3.627-3.39c-3.274-.09-4.955 2.474-4.955 6.14 0 3.665 1.858 6.597 5.045 6.597 3.184 0 3.538-3.665 3.538-3.665l6.104.365s.36 3.31-2.196 5.836c-2.552 2.524-5.69 2.937-7.876 2.92-2.19-.017-5.226.034-8.16-2.97C1.528 17.02 1.03 14.1 1.03 11.23c0-2.87.556-6.67 4.047-9.55C7.444.72 9.849 0 12.254 0c10.042 0 10.717 9.26 10.717 9.26z"
      />
    </svg>
  );
}

// Java Official Cup / Coffee Logo
export function JavaLogo({ className = "w-5 h-5", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg role="img" viewBox="0 0 24 24" className={className} {...props}>
      <path
        fill="#5382A1"
        d="M9.1 19.8s-.8.2-1.7.3c-2.3.3-3.6-.5-3.6-.5s.7.8 2.6 1.1c2.4.3 4.4-.1 4.4-.1l-1.7-.8zm-.5-2.2s-1.1.3-2.3.4c-3.1.3-4.9-.7-4.9-.7s1 1 3.5 1.4c3.3.4 6-.1 6-.1l-2.3-1zm8.3.8s.8-.5 1.1-.9c.4-.6.6-1.3.3-1.6-.3-.3-1-.2-1.9.2-.9.5-1.9 1.4-1.9 1.4s1 .5 2.4.9zm-4.7-6.2c.4-.7 1.4-1.6 1.4-1.6s-.6.5-1.1 1.2c-.6.9-.5 1.7.3 2.5.8.7 1.4 1.3 1.1 2.4-.3 1-1.3 1.6-1.3 1.6s.8-.3 1.3-1c.5-.8.5-1.7-.4-2.5-.9-.8-1.7-1.4-1.3-2.6zm3.3 2.6c1.4-.7 2.1-1.6 1.9-2.2-.2-.5-1.1-.7-2.3-.4l.4-1.1c1.9-.4 3.4 0 3.7 1 .4 1.1-.7 2.4-2.7 3.4l-1-.7z"
      />
      <path
        fill="#E76F00"
        d="M12.1 2c-.6 1.4-1.8 2.4-1.8 3.5 0 1.2 1.4 1.8 1.4 3 0 1.2-1.5 2-1.5 3.3 0 .4.2.8.5 1.1-.2-.5-.3-1-.3-1.4 0-1.2 1.4-1.9 1.4-3.1 0-1.1-1.3-1.9-1.3-2.9 0-.9 1-1.9 1.6-3.5z"
      />
      <path
        fill="#5382A1"
        d="M7.4 22.3s-1.1.2-2.4.2c-2.8 0-4.6-.9-4.6-.9s1.1 1.2 3.9 1.5c3.5.4 6.7-.2 6.7-.2l-3.6-.6z"
      />
    </svg>
  );
}

// HTML5 Official Shield Logo
export function Html5Logo({ className = "w-5 h-5", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg role="img" viewBox="0 0 24 24" className={className} {...props}>
      <path fill="#E34F26" d="M2 3l1.8 20.3L12 26l8.2-2.7L22 3H2z" />
      <path fill="#EF652A" d="M12 5.1v18.7l6.6-2.2 1.5-16.5H12z" />
      <path
        fill="#EBEBEB"
        d="M12 9.5H7.7l.3 3.3H12v-3.3zm0 6.6l-.1.02-2.7-.7-.2-2H6.7l.4 4.5 4.9 1.4v-3.22z"
      />
      <path
        fill="#FFFFFF"
        d="M12 9.5v3.3h3.9l-.4 4.1-3.5 1v3.2l6.2-1.7.9-9.9H12z"
      />
    </svg>
  );
}

// CSS3 Official Shield Logo
export function Css3Logo({ className = "w-5 h-5", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg role="img" viewBox="0 0 24 24" className={className} {...props}>
      <path fill="#1572B6" d="M2 3l1.8 20.3L12 26l8.2-2.7L22 3H2z" />
      <path fill="#33A9DC" d="M12 5.1v18.7l6.6-2.2 1.5-16.5H12z" />
      <path
        fill="#EBEBEB"
        d="M12 9.5H7.7l.3 3.3H12v-3.3zm0 6.6l-.1.02-2.7-.7-.2-2H6.7l.4 4.5 4.9 1.4v-3.22z"
      />
      <path
        fill="#FFFFFF"
        d="M12 9.5v3.3h3.9l-.4 4.1-3.5 1v3.2l6.2-1.7.9-9.9H12z"
      />
    </svg>
  );
}

// JavaScript Official Tile Logo
export function JavaScriptLogo({ className = "w-5 h-5", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg role="img" viewBox="0 0 24 24" className={className} {...props}>
      <rect width="24" height="24" fill="#F7DF1E" rx="3" />
      <path
        fill="#000000"
        d="M7.4 18.2c.4.7 1 1.2 1.9 1.2 1 0 1.6-.5 1.6-1.5v-6.2H8.8v6.2c0 .4-.1.6-.4.6-.2 0-.4-.1-.5-.3l-.5 0zm6.2-.2c.5.8 1.4 1.3 2.5 1.3 1.4 0 2.3-.7 2.3-1.8 0-1.2-.8-1.6-2.1-2.2-.9-.4-1.3-.7-1.3-1.3 0-.6.5-1 1.2-1 .7 0 1.1.3 1.4.9l1.4-.9c-.6-1-1.5-1.5-2.8-1.5-1.5 0-2.5.9-2.5 2.2 0 1.1.7 1.7 1.9 2.2.9.4 1.5.7 1.5 1.4 0 .6-.6 1.1-1.5 1.1-.9 0-1.4-.4-1.7-1l-1.3.7z"
      />
    </svg>
  );
}

// Git Official Logo
export function GitLogo({ className = "w-5 h-5", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg role="img" viewBox="0 0 24 24" className={className} {...props}>
      <path
        fill="#F05032"
        d="M23.5 11.2L12.8.5a1.8 1.8 0 0 0-2.5 0L8.2 2.6l3.3 3.3a2.1 2.1 0 0 1 2.7 2.7l3.2 3.2a2.1 2.1 0 1 1-1.3 1.2l-3-3v7.3a2.1 2.1 0 1 1-1.9 0v-7.4a2.1 2.1 0 0 1-1.1-2.8L6.8 3.8.5 10.1a1.8 1.8 0 0 0 0 2.5l10.7 10.7c.7.7 1.8.7 2.5 0l9.8-9.8a1.8 1.8 0 0 0 0-2.3z"
      />
    </svg>
  );
}

// VS Code Official Logo
export function VsCodeLogo({ className = "w-5 h-5", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg role="img" viewBox="0 0 24 24" className={className} {...props}>
      <path
        fill="#0065A9"
        d="M17.6 24l5.4-2.6c.6-.3 1-.9 1-1.6V4.2c0-.7-.4-1.3-1-1.6L17.6 0l-9.8 9.2L3.6 6 .6 7.4c-.7.3-1 .9-1 1.6v6c0 .7.3 1.3 1 1.6l3 1.4 4.2-3.2L17.6 24z"
      />
      <path
        fill="#007ACC"
        d="M17.6 0v24l5.4-2.6c.6-.3 1-.9 1-1.6V4.2c0-.7-.4-1.3-1-1.6L17.6 0z"
      />
      <path
        fill="#1F9CF0"
        d="M17.6 6.8L10.3 0 7.8 2.4l7.1 6.6 2.7-2.2zm0 10.4l-2.7-2.2-7.1 6.6 2.5 2.4 7.3-6.8z"
      />
    </svg>
  );
}
