'use client';

import { useEffect, useState } from 'react';
import TypewriterLib from 'typewriter-effect';

export function Typewriter({ words, className = '' }: { words: string[]; className?: string }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return <span className={className}>{words[0]}</span>;

  return (
    <TypewriterLib
      options={{
        strings: words,
        autoStart: true,
        loop: true,
        wrapperClassName: className,
      }}
    />
  );
}
