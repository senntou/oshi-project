import { NextResponse } from 'next/server';

const middleware = async () => {
  console.log('Middleware called');
  return NextResponse.next();
};

export default middleware;
