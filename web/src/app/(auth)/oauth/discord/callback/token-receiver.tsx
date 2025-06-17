'use client';

import { redirect } from 'next/navigation';
import { useEffect } from 'react';

type Props = {
  accessToken: string;
};

export const TokenReceiver: React.FC<Props> = ({ accessToken }) => {
  useEffect(() => {
    if (typeof window === 'undefined') {
      // 何らかのエラー表示をしたい
      return;
    }

    localStorage.setItem('access_token', accessToken);
    redirect("/about")
  }, [accessToken]);

  return null;
};
