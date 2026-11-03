type ToolLogoProps = { name: string };

export function ToolLogo({ name }: ToolLogoProps) {
  const key = name.toLowerCase();

  if (key.includes("figma")) return <span className="tool-brand" role="img" aria-label={name}><svg viewBox="0 0 24 32" aria-hidden="true"><path fill="#f24e1e" d="M5 1h7a5 5 0 0 1 0 10H5A5 5 0 0 1 5 1Z"/><circle cx="17" cy="6" r="5" fill="#ff7262"/><path fill="#a259ff" d="M5 11h7a5 5 0 0 1 0 10H5a5 5 0 0 1 0-10Z"/><circle cx="17" cy="16" r="5" fill="#1abcfe"/><path fill="#0acf83" d="M5 21h7a5 5 0 0 1 0 10H5a5 5 0 0 1-5-5Z"/></svg></span>;

  if (key.includes("enterprise architect") || key.includes("sparx")) return <span className="tool-brand" role="img" aria-label={name}><img src="https://sparxsystems.com/images/earose.png" alt="" loading="lazy" /></span>;

  if (key.includes("bizagi")) return <span className="tool-brand" role="img" aria-label={name}><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#00a859" d="M4 3h8l8 7H9L4 3Zm0 8h8l8 7H9l-5-7Z"/><path fill="#74bd43" d="M4 19h8l-8 4v-4Z"/></svg></span>;

  if (key.includes("draw.io") || key.includes("drawio") || key.includes("diagrams.net")) return <span className="tool-brand" role="img" aria-label={name}><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="1" y="1" width="22" height="22" rx="3" fill="#172331"/><path d="M7 7 17 17M17 7 7 17" stroke="#fff" strokeWidth="1.3"/><circle cx="7" cy="7" r="2.5" fill="#f7c943"/><circle cx="17" cy="7" r="2.5" fill="#56b4e9"/><circle cx="7" cy="17" r="2.5" fill="#65c78a"/><circle cx="17" cy="17" r="2.5" fill="#f07b52"/></svg></span>;

  if (key.includes("sap")) return <span className="tool-brand" role="img" aria-label={name}><svg viewBox="0 0 30 20" aria-hidden="true"><path fill="#0878b9" d="M1 1h28L19 19H1Z"/><path fill="#fff" d="M7 14V6h4c2.5 0 4 1.2 4 3.2 0 1.4-.7 2.4-2 2.9l2 1.9h-3.2L10 11.4v2.6Zm3-4.7h1c.8 0 1.2-.3 1.2-.9s-.4-.9-1.2-.9h-1Z"/></svg></span>;

  if (key.includes("visio")) return <span className="tool-brand" role="img" aria-label={name}><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#3955a4" d="M3 4h6l5 5-5 5H3l5-5-5-5Z"/><path fill="#6c78bd" d="M11 9h9v11h-9z"/><path fill="#fff" d="m13 12 2 2 2-2v5h-4z"/></svg></span>;

  if (key.includes("word")) return <span className="tool-brand" role="img" aria-label={name}><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#185abd" d="M5 2h16v20H5z"/><path fill="#41a5ee" d="M2 5h14v14H2z"/><path fill="#2b7cd3" d="M1 7h12v10H1z"/><path d="m4 9 1.2 6 1.3-4 1.2 4L9 9" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4"/></svg></span>;

  if (key.includes("excel")) return <span className="tool-brand" role="img" aria-label={name}><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#185c37" d="M6 2h15v20H6z"/><path fill="#21a366" d="M3 5h15v14H3z"/><path fill="#107c41" d="M1 7h12v10H1z"/><path d="m4 9 2 3-2 3m4-6-2 3 2 3" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="1.3"/></svg></span>;

  if (key.includes("microsoft office") || key === "office") return <span className="tool-brand" role="img" aria-label={name}><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#f35325" d="M2 2h9v9H2z"/><path fill="#81bc06" d="M13 2h9v9h-9z"/><path fill="#05a6f0" d="M2 13h9v9H2z"/><path fill="#ffba08" d="M13 13h9v9h-9z"/></svg></span>;

  if (key.includes("javascript")) return <span className="tool-brand" role="img" aria-label={name}><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#f7df1e" d="M2 2h20v20H2z"/><path fill="#111" d="M13 16.8c.4.7.9 1.1 1.8 1.1.7 0 1.1-.3 1.1-.7 0-.5-.4-.7-1.2-1.1l-.4-.2c-1.2-.5-2-1.2-2-2.6 0-1.3 1-2.3 2.6-2.3 1.1 0 1.9.4 2.4 1.5l-1.3.8c-.3-.6-.6-.8-1.1-.8-.4 0-.7.3-.7.6 0 .4.3.6 1 .9l.4.2c1.5.7 2.3 1.3 2.3 2.8 0 1.6-1.2 2.5-2.9 2.5-1.6 0-2.7-.8-3.2-1.9l1.2-.8Zm-5.3.1c.3.5.5.9 1.1.9.5 0 .8-.2.8-1v-5.7h1.8v5.8c0 1.8-1 2.6-2.5 2.6-1.4 0-2.2-.7-2.7-1.7l1.5-.9Z"/></svg></span>;
  if (key.includes("laravel")) return <span className="tool-brand" role="img" aria-label={name}><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#f05340" d="m12 1 10 5.7v10.6L12 23 2 17.3V6.7L12 1Zm0 2.5L5.5 7.2 12 11l6.5-3.8L12 3.5Zm-7.5 6v6.4l6.2 3.6v-6.4L4.5 9.5Zm9 10 6-3.6V9.5l-6 3.6v6.4Z"/></svg></span>;

  if (key === "php") return <span className="tool-brand" role="img" aria-label={name}><svg viewBox="0 0 30 20" aria-hidden="true"><ellipse cx="15" cy="10" rx="14" ry="8" fill="#777bb3"/><text x="15" y="13" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="700">PHP</text></svg></span>;

  if (key.includes("mysql")) return <span className="tool-brand" role="img" aria-label={name}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 15c4-8 9-9 15-6-3 0-5 1-6 3 3-1 6 0 9 2-4-1-7-1-9 1l-3 4H6l3-4c-2 0-4 0-6 0Z" fill="#08799b"/><circle cx="17" cy="7" r="1" fill="#e68a19"/></svg></span>;

  if (key.includes("github")) return <span className="tool-brand" role="img" aria-label={name}><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#181717" d="M12 1.2a10.8 10.8 0 0 0-3.4 21.1c.5.1.7-.2.7-.5v-2c-2.9.6-3.5-1.2-3.5-1.2-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.6 1.1 1.6 1.1 1 1.6 2.5 1.2 3.1.9.1-.7.4-1.2.7-1.4-2.3-.3-4.8-1.2-4.8-5.3 0-1.2.4-2.1 1.1-2.9-.1-.3-.5-1.4.1-2.8 0 0 .9-.3 2.9 1.1a10 10 0 0 1 5.3 0c2-1.4 2.9-1.1 2.9-1.1.6 1.4.2 2.5.1 2.8.7.8 1.1 1.7 1.1 2.9 0 4.1-2.5 5-4.8 5.3.4.3.7 1 .7 2v2.9c0 .3.2.6.7.5A10.8 10.8 0 0 0 12 1.2Z"/></svg></span>;
  if (key.includes("git")) return <span className="tool-brand" role="img" aria-label={name}><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#f05032" d="m12 1 11 11-11 11L1 12 12 1Z"/><path d="M8 8v5l4 3m0-6v6m0-6 4-2" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="1.4"/><circle cx="8" cy="8" r="1.2" fill="#fff"/><circle cx="12" cy="10" r="1.2" fill="#fff"/><circle cx="16" cy="8" r="1.2" fill="#fff"/><circle cx="12" cy="16" r="1.2" fill="#fff"/></svg></span>;

  const initials = name.split(/\s+/).map((part) => part[0]).join("").slice(0, 2).toUpperCase();
  return <span className="tool-brand tool-brand-generic" role="img" aria-label={name}><span aria-hidden="true">{initials}</span></span>;
}
