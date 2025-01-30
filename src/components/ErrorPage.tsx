import Link from "next/link";
import React from "react";

const ErrorPage = async ({ code }: { code: number }) => {
  if (code === 404) {
    return (
      <div>
        <h1>Erreur 404</h1>
        <p>
          La page que vous recherchez n&apos;existe pas, nous vous invitions à
          retourner sur le site en cliquant sur le lien ci-dessous.
        </p>
        <button>
          <Link href="/">Retourner sur le site</Link>
        </button>
      </div>
    );
  }
};

export default ErrorPage;
