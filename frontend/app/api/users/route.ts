import { NextRequest, NextResponse } from 'next/server';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const GET = (request: NextRequest): NextResponse => {
  const data = {
    message: 'Hello, world!',
    timestamp: new Date().toISOString(),
  };

  return NextResponse.json(data);
};
