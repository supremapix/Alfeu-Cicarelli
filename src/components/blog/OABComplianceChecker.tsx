import React from 'react';

const prohibitedTerms = [
  "melhor advogado",
  "garantia de resultado",
  "100% sucesso",
  "vitória garantida",
  "causa ganha",
  "especialista único",
  "melhor escritório"
];

export const OABComplianceChecker: React.FC<{ content: string }> = ({ content }) => {
  const lowercaseContent = content.toLowerCase();
  const violations = prohibitedTerms.filter(term => lowercaseContent.includes(term.toLowerCase()));

  if (violations.length === 0) return null;

  return (
    <div className="bg-red-50 border-2 border-red-200 p-4 rounded-lg my-8 text-red-800 text-sm">
      <p className="font-bold mb-2">⚠️ Alerta de Conformidade OAB:</p>
      <p>Este artigo contém termos possivelmente proibidos pelo Provimento 205/2021:</p>
      <ul className="list-disc pl-5 mt-2">
        {violations.map(v => <li key={v}>{v}</li>)}
      </ul>
      <p className="mt-2 text-xs italic">A publicidade na advocacia deve ser meramente informativa e sem sensacionalismo.</p>
    </div>
  );
};
