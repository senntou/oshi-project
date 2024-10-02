'use client';
import { auth } from '@/lib/auth/firebase';

const tokenGetter = () => {
  const getToken = async () => {
    const token = await auth.currentUser?.getIdToken();
    if (token) navigator.clipboard.writeText(token);
  };

  return (
    <div>
      <button className="p-10 border border-black" onClick={getToken}>
        Get Token
      </button>
    </div>
  );
};

export default tokenGetter;
