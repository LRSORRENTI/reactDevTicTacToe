import React, { useEffect, useRef } from 'react';

const NeonText = ({ text }) => {
  const neonRef = useRef(null);

  useEffect(() => {
    const target = neonRef.current;

    const flickerLetter = letter => `<span style="animation: text-flicker-in-glow ${Math.random()*4}s linear both ">${letter}</span>`
    const colorLetter = letter => `<span style="color: hsla(${Math.random()*360}, 100%, 80%, 1);">${letter}</span>`;
    const flickerAndColorText = text => 
      text
        .split('')
        .map(flickerLetter)
        .map(colorLetter)
        .join('');
    const neonGlory = target => target.innerHTML = flickerAndColorText(target.textContent);

    neonGlory(target);
    target.onclick = ({ target }) =>  neonGlory(target);
  }, [text]);

  return (
    <h1 ref={neonRef}>
      {text}
    </h1>
  );
};

export default NeonText;