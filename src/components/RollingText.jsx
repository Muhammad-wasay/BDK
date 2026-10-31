/**
 * RollingText:
 * Kinetic wave text-flip animation on hover.
 * - dir="ltr" ensures characters NEVER reverse in RTL mode.
 * - Urdu script (Nastaliq/Arabic) is kept intact as whole text (not split per letter) to preserve cursive ligatures.
 */
export default function RollingText({ text, className = '' }) {
  if (!text) return null;

  // Check if string contains Arabic/Urdu characters
  const isUrduScript = /[\u0600-\u06FF]/.test(text);

  if (isUrduScript) {
    return (
      <span className={`inline-block font-inherit select-none ${className}`}>
        {text}
      </span>
    );
  }

  const characters = text.split('');

  return (
    <span 
      dir="ltr"
      className={`inline-flex items-center overflow-hidden font-inherit select-none ${className}`}
    >
      {characters.map((char, index) => (
        <span
          key={index}
          className="relative inline-block overflow-hidden leading-tight"
        >
          {/* Primary character */}
          <span
            className="block transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full"
            style={{ transitionDelay: `${index * 16}ms` }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>

          {/* Duplicate rolling character */}
          <span
            className="absolute left-0 top-0 block font-black text-[#1B2440] translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-[cubic-bezier(0.76,0,0.24,1)]"
            style={{ transitionDelay: `${index * 16}ms` }}
            aria-hidden="true"
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        </span>
      ))}
    </span>
  );
}
